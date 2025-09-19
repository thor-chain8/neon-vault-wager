# Vercel Deployment Guide for Neon Vault Wager

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Ensure your code is pushed to GitHub
3. **Environment Variables**: Prepare the required environment variables

## Step-by-Step Deployment

### Step 1: Connect Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"New Project"**
3. Import your GitHub repository: `thor-chain8/neon-vault-wager`
4. Select the repository and click **"Import"**

### Step 2: Configure Project Settings

1. **Framework Preset**: Select **"Vite"**
2. **Root Directory**: Leave as `./` (default)
3. **Build Command**: `npm run build`
4. **Output Directory**: `dist`
5. **Install Command**: `npm install`

### Step 3: Set Environment Variables

In the Vercel dashboard, go to **Settings > Environment Variables** and add:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

### Step 4: Deploy

1. Click **"Deploy"** button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Your app will be available at: `https://neon-vault-wager-xxx.vercel.app`

### Step 5: Custom Domain (Optional)

1. Go to **Settings > Domains**
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate to be issued

## Environment Variables Reference

| Variable | Value | Description |
|----------|-------|-------------|
| `NEXT_PUBLIC_CHAIN_ID` | `11155111` | Sepolia testnet chain ID |
| `NEXT_PUBLIC_RPC_URL` | `https://sepolia.infura.io/v3/...` | RPC endpoint for blockchain |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | `2ec9743d0d0cd7fb94dee1a7e6d33475` | WalletConnect project ID |
| `NEXT_PUBLIC_INFURA_API_KEY` | `b18fb7e6ca7045ac83c41157ab93f990` | Infura API key |

## Build Configuration

The project uses the following build configuration:

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

1. **Build Fails**: Check that all dependencies are in `package.json`
2. **Environment Variables**: Ensure all required variables are set
3. **Wallet Connection**: Verify WalletConnect project ID is correct
4. **RPC Issues**: Check that RPC URL is accessible

### Debug Steps

1. Check build logs in Vercel dashboard
2. Verify environment variables are set correctly
3. Test locally with `npm run dev`
4. Check browser console for errors

## Post-Deployment

### Smart Contract Deployment

1. Deploy contracts to Sepolia testnet:
```bash
npm install -g hardhat
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

2. Update contract addresses in the frontend if needed

### Testing

1. Connect wallet to Sepolia testnet
2. Get test ETH from [Sepolia Faucet](https://sepoliafaucet.com/)
3. Test wallet connection and betting functionality

## Support

For issues or questions:
- Check the [GitHub repository](https://github.com/thor-chain8/neon-vault-wager)
- Open an issue for bugs or feature requests
- Review Vercel documentation for deployment issues

## Security Notes

- Never commit private keys or sensitive data
- Use environment variables for all configuration
- Regularly update dependencies for security patches
- Monitor for any security vulnerabilities in dependencies
