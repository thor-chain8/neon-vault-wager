// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract NeonVaultWager is SepoliaConfig {
    using FHE for *;
    
    struct Wager {
        euint32 wagerId;
        euint32 amount;
        euint32 odds;
        euint8 outcome;
        bool isActive;
        bool isSettled;
        string description;
        address bettor;
        uint256 timestamp;
        uint256 deadline;
    }
    
    struct Vault {
        euint32 totalPool;
        euint32 availableFunds;
        euint32 totalWagers;
        bool isActive;
        address owner;
        uint256 createdAt;
    }
    
    mapping(uint256 => Wager) public wagers;
    mapping(uint256 => Vault) public vaults;
    mapping(address => euint32) public userBalances;
    mapping(address => euint32) public userReputation;
    
    uint256 public wagerCounter;
    uint256 public vaultCounter;
    
    address public owner;
    address public verifier;
    
    event WagerCreated(uint256 indexed wagerId, address indexed bettor, string description);
    event WagerSettled(uint256 indexed wagerId, uint8 outcome);
    event VaultCreated(uint256 indexed vaultId, address indexed owner);
    event FundsDeposited(address indexed user, uint32 amount);
    event FundsWithdrawn(address indexed user, uint32 amount);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createVault(
        string memory _description
    ) public returns (uint256) {
        require(bytes(_description).length > 0, "Description cannot be empty");
        
        uint256 vaultId = vaultCounter++;
        
        vaults[vaultId] = Vault({
            totalPool: FHE.asEuint32(0),
            availableFunds: FHE.asEuint32(0),
            totalWagers: FHE.asEuint32(0),
            isActive: true,
            owner: msg.sender,
            createdAt: block.timestamp
        });
        
        emit VaultCreated(vaultId, msg.sender);
        return vaultId;
    }
    
    function createWager(
        uint256 vaultId,
        string memory _description,
        uint256 _deadline,
        externalEuint32 amount,
        externalEuint32 odds,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(vaults[vaultId].owner != address(0), "Vault does not exist");
        require(vaults[vaultId].isActive, "Vault is not active");
        require(_deadline > block.timestamp, "Deadline must be in the future");
        require(bytes(_description).length > 0, "Description cannot be empty");
        
        uint256 wagerId = wagerCounter++;
        
        // Convert external encrypted values to internal
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        euint32 internalOdds = FHE.fromExternal(odds, inputProof);
        
        wagers[wagerId] = Wager({
            wagerId: FHE.asEuint32(0), // Will be set properly later
            amount: internalAmount,
            odds: internalOdds,
            outcome: FHE.asEuint8(0),
            isActive: true,
            isSettled: false,
            description: _description,
            bettor: msg.sender,
            timestamp: block.timestamp,
            deadline: _deadline
        });
        
        // Update vault totals
        vaults[vaultId].totalWagers = FHE.add(vaults[vaultId].totalWagers, FHE.asEuint32(1));
        vaults[vaultId].totalPool = FHE.add(vaults[vaultId].totalPool, internalAmount);
        
        emit WagerCreated(wagerId, msg.sender, _description);
        return wagerId;
    }
    
    function depositFunds(
        externalEuint32 amount,
        bytes calldata inputProof
    ) public {
        require(amount.length > 0, "Amount must be provided");
        
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        userBalances[msg.sender] = FHE.add(userBalances[msg.sender], internalAmount);
        
        emit FundsDeposited(msg.sender, 0); // Amount will be decrypted off-chain
    }
    
    function withdrawFunds(
        externalEuint32 amount,
        bytes calldata inputProof
    ) public {
        require(amount.length > 0, "Amount must be provided");
        
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        
        // Check if user has sufficient balance (this would need to be done off-chain)
        // For now, we'll allow withdrawal
        userBalances[msg.sender] = FHE.sub(userBalances[msg.sender], internalAmount);
        
        emit FundsWithdrawn(msg.sender, 0); // Amount will be decrypted off-chain
    }
    
    function settleWager(
        uint256 wagerId,
        euint8 outcome
    ) public {
        require(wagers[wagerId].bettor != address(0), "Wager does not exist");
        require(wagers[wagerId].isActive, "Wager is not active");
        require(msg.sender == verifier, "Only verifier can settle wagers");
        
        wagers[wagerId].outcome = outcome;
        wagers[wagerId].isSettled = true;
        wagers[wagerId].isActive = false;
        
        emit WagerSettled(wagerId, 0); // Outcome will be decrypted off-chain
    }
    
    function updateReputation(
        address user,
        euint32 reputation
    ) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        userReputation[user] = reputation;
        emit ReputationUpdated(user, 0); // Reputation will be decrypted off-chain
    }
    
    function getWagerInfo(uint256 wagerId) public view returns (
        string memory description,
        address bettor,
        uint8 amount,
        uint8 odds,
        uint8 outcome,
        bool isActive,
        bool isSettled,
        uint256 timestamp,
        uint256 deadline
    ) {
        Wager storage wager = wagers[wagerId];
        return (
            wager.description,
            wager.bettor,
            0, // FHE.decrypt(wager.amount) - will be decrypted off-chain
            0, // FHE.decrypt(wager.odds) - will be decrypted off-chain
            0, // FHE.decrypt(wager.outcome) - will be decrypted off-chain
            wager.isActive,
            wager.isSettled,
            wager.timestamp,
            wager.deadline
        );
    }
    
    function getVaultInfo(uint256 vaultId) public view returns (
        uint8 totalPool,
        uint8 availableFunds,
        uint8 totalWagers,
        bool isActive,
        address owner,
        uint256 createdAt
    ) {
        Vault storage vault = vaults[vaultId];
        return (
            0, // FHE.decrypt(vault.totalPool) - will be decrypted off-chain
            0, // FHE.decrypt(vault.availableFunds) - will be decrypted off-chain
            0, // FHE.decrypt(vault.totalWagers) - will be decrypted off-chain
            vault.isActive,
            vault.owner,
            vault.createdAt
        );
    }
    
    function getUserBalance(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(userBalances[user]) - will be decrypted off-chain
    }
    
    function getUserReputation(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(userReputation[user]) - will be decrypted off-chain
    }
    
    function closeVault(uint256 vaultId) public {
        require(vaults[vaultId].owner == msg.sender, "Only vault owner can close");
        require(vaults[vaultId].isActive, "Vault is already closed");
        
        vaults[vaultId].isActive = false;
    }
    
    function emergencyWithdraw(uint256 vaultId) public {
        require(msg.sender == owner, "Only contract owner can emergency withdraw");
        require(vaults[vaultId].owner != address(0), "Vault does not exist");
        
        vaults[vaultId].isActive = false;
        // In a real implementation, funds would be transferred to a safe address
    }
}
