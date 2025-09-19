import { useWriteContract, useReadContract, useAccount } from 'wagmi';

// Contract ABI - This would be generated from your compiled contract
const CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType": "address", "name": "_verifier", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "_description", "type": "string"}
    ],
    "name": "createVault",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "vaultId", "type": "uint256"},
      {"internalType": "string", "name": "_description", "type": "string"},
      {"internalType": "uint256", "name": "_deadline", "type": "uint256"},
      {"internalType": "bytes", "name": "amount", "type": "bytes"},
      {"internalType": "bytes", "name": "odds", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "createWager",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "bytes", "name": "amount", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "depositFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "bytes", "name": "amount", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "withdrawFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "wagerId", "type": "uint256"},
      {"internalType": "bytes", "name": "outcome", "type": "bytes"}
    ],
    "name": "settleWager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

// Contract address - This would be your deployed contract address
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0x0000000000000000000000000000000000000000';

export const useNeonVaultContract = () => {
  const { address } = useAccount();

  return {
    address,
    isConnected: !!address,
    contractAddress: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
  };
};

export const useCreateVault = () => {
  const { writeContract, isPending, error } = useWriteContract();

  const createVault = async (description: string) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'createVault',
      args: [description],
    });
  };

  return {
    createVault,
    isLoading: isPending,
    error,
  };
};

export const useCreateWager = () => {
  const { writeContract, isPending, error } = useWriteContract();

  const createWager = async (args: any[]) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'createWager',
      args,
    });
  };

  return {
    createWager,
    isLoading: isPending,
    error,
  };
};

export const useDepositFunds = () => {
  const { writeContract, isPending, error } = useWriteContract();

  const depositFunds = async (args: any[]) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'depositFunds',
      args,
    });
  };

  return {
    depositFunds,
    isLoading: isPending,
    error,
  };
};

export const useWithdrawFunds = () => {
  const { writeContract, isPending, error } = useWriteContract();

  const withdrawFunds = async (args: any[]) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'withdrawFunds',
      args,
    });
  };

  return {
    withdrawFunds,
    isLoading: isPending,
    error,
  };
};

export const useSettleWager = () => {
  const { writeContract, isPending, error } = useWriteContract();

  const settleWager = async (args: any[]) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'settleWager',
      args,
    });
  };

  return {
    settleWager,
    isLoading: isPending,
    error,
  };
};

// Read functions
export const useWagerInfo = (wagerId: number) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getWagerInfo',
    args: [wagerId],
  });

  return {
    wagerInfo: data,
    isLoading,
    error,
  };
};

export const useVaultInfo = (vaultId: number) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getVaultInfo',
    args: [vaultId],
  });

  return {
    vaultInfo: data,
    isLoading,
    error,
  };
};

export const useUserBalance = (userAddress: string) => {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'getUserBalance',
    args: [userAddress],
  });

  return {
    balance: data,
    isLoading,
    error,
  };
};
