# 🚀 Vercel Deployment Guide

## Prerequisites

- Vercel account
- GitHub repository access
- Environment variables ready

## Step-by-Step Deployment

### 1. Connect Repository

1. Visit [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Import from GitHub: `thor-chain8/neon-vault-wager`
4. Click **"Import"**

### 2. Configure Project

- **Framework**: Vite
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3. Environment Variables

Add these variables in Vercel dashboard:

```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_rpc_endpoint
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key
```

### 4. Deploy

1. Click **"Deploy"**
2. Wait for build completion
3. Access your app at the provided URL

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_CHAIN_ID` | Blockchain network ID | `11155111` |
| `NEXT_PUBLIC_RPC_URL` | RPC endpoint URL | `https://sepolia.infura.io/v3/...` |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | `your_project_id` |
| `NEXT_PUBLIC_INFURA_API_KEY` | Infura API key | `your_api_key` |

## Build Configuration

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite"
}
```

## Troubleshooting

### Common Issues

1. **Build Fails**: Check dependencies in `package.json`
2. **Environment Variables**: Verify all required variables are set
3. **Wallet Connection**: Confirm WalletConnect project ID
4. **RPC Issues**: Ensure RPC URL is accessible

### Debug Steps

1. Check build logs in Vercel dashboard
2. Verify environment variables
3. Test locally with `npm run dev`
4. Check browser console for errors

## Post-Deployment

### Smart Contract Deployment

```bash
# Install Hardhat
npm install -g hardhat

# Compile contracts
npx hardhat compile

# Deploy to network
npx hardhat run scripts/deploy.js --network sepolia
```

### Testing

1. Connect wallet to Sepolia testnet
2. Get test ETH from faucet
3. Test wallet connection and functionality

## Security Notes

- Never commit private keys
- Use environment variables for configuration
- Update dependencies regularly
- Monitor for security vulnerabilities

## Support

- Check GitHub repository for issues
- Review Vercel documentation
- Contact development team for assistance