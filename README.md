# Neon Vault Wager

A decentralized betting platform built with React, TypeScript, and FHE (Fully Homomorphic Encryption) technology.

## Features

- **Secure Betting**: All betting data is encrypted using FHE technology
- **Wallet Integration**: Connect with popular Web3 wallets
- **Real-time Updates**: Live betting odds and results
- **Privacy-First**: Your betting data remains private and encrypted

## Technologies

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Radix UI, Tailwind CSS
- **Web3**: RainbowKit, Wagmi, Viem
- **Encryption**: FHE (Fully Homomorphic Encryption)
- **Blockchain**: Ethereum Sepolia Testnet

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/thor-chain8/neon-vault-wager.git
cd neon-vault-wager
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure environment variables:
```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

5. Start development server:
```bash
npm run dev
```

## Smart Contracts

The platform uses FHE-encrypted smart contracts for secure betting operations:

- **Vault Contract**: Manages encrypted betting pools
- **FHE Operations**: All sensitive data is encrypted on-chain
- **Privacy**: Betting amounts and outcomes remain private

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please open an issue on GitHub.