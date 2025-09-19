import HolographicTrophy from "./HolographicTrophy";
import { Gamepad2, Shield, Lock, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-card/50 border-t border-border overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-holo opacity-5" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Holographic Trophies Section */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Championship Trophies
          </h3>
          <HolographicTrophy />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="text-center">
            <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
            <h4 className="font-semibold text-sm text-foreground">Encrypted Bets</h4>
            <p className="text-xs text-muted-foreground">Private until reveal</p>
          </div>
          <div className="text-center">
            <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
            <h4 className="font-semibold text-sm text-foreground">FHE Security</h4>
            <p className="text-xs text-muted-foreground">Fully homomorphic</p>
          </div>
          <div className="text-center">
            <Gamepad2 className="w-8 h-8 text-secondary mx-auto mb-2" />
            <h4 className="font-semibold text-sm text-foreground">Live eSports</h4>
            <p className="text-xs text-muted-foreground">Real-time matches</p>
          </div>
          <div className="text-center">
            <Zap className="w-8 h-8 text-warning mx-auto mb-2" />
            <h4 className="font-semibold text-sm text-foreground">Instant Payouts</h4>
            <p className="text-xs text-muted-foreground">Automated rewards</p>
          </div>
        </div>

        {/* Bottom text */}
        <div className="text-center text-xs text-muted-foreground border-t border-border pt-6">
          <p>© 2024 Encrypted eSports Betting. Powered by FHE technology.</p>
          <p className="mt-1">All bets are encrypted and remain confidential until match completion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;