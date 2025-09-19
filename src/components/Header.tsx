import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Shield } from "lucide-react";
import encryptedLogo from "@/assets/encrypted-controller-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={encryptedLogo} 
            alt="Neon Vault Wager" 
            className="w-10 h-10 animate-pulse-glow"
          />
          <div>
            <h1 className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              Neon Vault Wager
            </h1>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Shield className="w-3 h-3" />
              FHE Encrypted Betting
            </p>
          </div>
        </div>
        
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;