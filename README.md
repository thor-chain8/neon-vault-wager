# ⚡ Neon Vault Wager

> **Revolutionary FHE-Encrypted Betting Platform** - Where Privacy Meets Blockchain

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

## 🎯 What Makes Us Different?

Neon Vault Wager isn't just another betting platform - it's a **privacy-first revolution** in decentralized gaming. Built with cutting-edge **Fully Homomorphic Encryption (FHE)**, your betting data remains completely private while maintaining full transparency on the blockchain.

### 🔐 Core Features

- **🛡️ FHE Encryption**: All sensitive data encrypted on-chain
- **🎮 Multi-Game Support**: eSports, sports, and custom events
- **💰 Smart Vaults**: Decentralized fund management
- **🏆 Reputation System**: Encrypted user reputation tracking
- **⚡ Lightning Fast**: Optimized for speed and efficiency
- **🌐 Cross-Chain Ready**: Built for the future of Web3

## 🚀 Quick Start

### Prerequisites

```bash
Node.js >= 18.0.0
npm >= 8.0.0
Git
```

### Installation

```bash
# Clone the repository
git clone https://github.com/thor-chain8/neon-vault-wager.git
cd neon-vault-wager

# Install dependencies
npm install

# Copy environment template
cp env.example .env

# Start development server
npm run dev
```

### Environment Setup

Create a `.env` file with the following variables:

```env
# Blockchain Configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_rpc_endpoint_here

# Wallet Connect
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here

# Optional: Infura
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key_here
```

## 🏗️ Architecture

### Frontend Stack
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **RainbowKit** - Wallet connection
- **Wagmi** - Ethereum interactions

### Smart Contracts
- **Solidity 0.8.24** - Latest stable version
- **FHEVM** - Fully homomorphic encryption
- **Hardhat** - Development framework
- **Sepolia Testnet** - Testing environment

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build

# Smart Contracts
npm run compile      # Compile contracts
npm run deploy       # Deploy to network
npm run test         # Run tests
```

### Smart Contract Deployment

```bash
# Install Hardhat dependencies
npm install -g hardhat

# Compile contracts
npx hardhat compile

# Deploy to Sepolia
npx hardhat run scripts/deploy.js --network sepolia
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Import project from GitHub
   - Select Vite framework preset

2. **Configure Environment**
   - Add all required environment variables
   - Set build command: `npm run build`
   - Set output directory: `dist`

3. **Deploy**
   - Automatic deployment on push
   - Custom domain support available

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to your preferred platform
# Files will be in the 'dist' directory
```

## 🔒 Security Features

### FHE Encryption
- **Private Betting**: Amounts and outcomes encrypted
- **Secure Vaults**: Fund management with privacy
- **Reputation System**: Encrypted user scoring
- **Zero-Knowledge**: No data leakage possible

### Smart Contract Security
- **Audited Code**: Professional security review
- **Access Controls**: Role-based permissions
- **Emergency Functions**: Circuit breakers included
- **Upgradeable**: Future-proof architecture

## 📊 Project Structure

```
neon-vault-wager/
├── 📁 contracts/          # Smart contracts
│   └── NeonVaultWager.sol
├── 📁 scripts/            # Deployment scripts
├── 📁 src/
│   ├── 📁 components/     # React components
│   ├── 📁 lib/           # Utilities & configs
│   └── 📁 pages/         # Application pages
├── 📁 public/            # Static assets
└── 📄 Configuration files
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check our [Wiki](https://github.com/thor-chain8/neon-vault-wager/wiki)
- **Issues**: [GitHub Issues](https://github.com/thor-chain8/neon-vault-wager/issues)
- **Discussions**: [GitHub Discussions](https://github.com/thor-chain8/neon-vault-wager/discussions)

## 🌟 Acknowledgments

- **FHEVM Team** - For FHE encryption support
- **RainbowKit** - For wallet connection
- **Vite Team** - For amazing build tools
- **React Team** - For the excellent framework

---

**Built with ❤️ by the Neon Vault Team**

*Revolutionizing privacy in decentralized betting*