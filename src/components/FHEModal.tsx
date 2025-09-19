import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, EyeOff, CheckCircle, ArrowRight } from "lucide-react";

interface FHEModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FHEModal = ({ open, onOpenChange }: FHEModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card border-primary/20 shadow-glow-primary max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-cyber bg-clip-text text-transparent">
            Fully Homomorphic Encryption (FHE)
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Introduction */}
          <Card className="p-6 bg-gradient-neon/5 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-lg font-semibold">What is FHE?</h3>
                <p className="text-sm text-muted-foreground">Revolutionary privacy technology</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              FHE allows computations to be performed on encrypted data without decrypting it first. 
              Your betting data remains completely private throughout the entire process.
            </p>
          </Card>

          {/* How it works */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">How FHE Protects Your Bets</h3>
            
            <div className="grid gap-4">
              <Card className="p-4 border-accent/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Bet Encryption</h4>
                    <p className="text-xs text-muted-foreground">
                      Your bet choice and amount are encrypted before leaving your device
                    </p>
                  </div>
                  <Lock className="w-5 h-5 text-accent" />
                </div>
              </Card>

              <Card className="p-4 border-secondary/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Encrypted Processing</h4>
                    <p className="text-xs text-muted-foreground">
                      Smart contracts process encrypted bets without seeing the contents
                    </p>
                  </div>
                  <EyeOff className="w-5 h-5 text-secondary" />
                </div>
              </Card>

              <Card className="p-4 border-success/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
                    <span className="text-success font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">Result Revelation</h4>
                    <p className="text-xs text-muted-foreground">
                      Only after match ends, results are decrypted and winners paid
                    </p>
                  </div>
                  <Eye className="w-5 h-5 text-success" />
                </div>
              </Card>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">Privacy Benefits</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <CheckCircle className="w-6 h-6 text-primary mb-2" />
                <h4 className="font-semibold text-sm mb-1">Complete Privacy</h4>
                <p className="text-xs text-muted-foreground">
                  No one can see your bet until results are revealed
                </p>
              </Card>

              <Card className="p-4 bg-accent/5 border-accent/20">
                <CheckCircle className="w-6 h-6 text-accent mb-2" />
                <h4 className="font-semibold text-sm mb-1">No Front-Running</h4>
                <p className="text-xs text-muted-foreground">
                  Prevents others from copying successful betting strategies
                </p>
              </Card>

              <Card className="p-4 bg-secondary/5 border-secondary/20">
                <CheckCircle className="w-6 h-6 text-secondary mb-2" />
                <h4 className="font-semibold text-sm mb-1">Fair Odds</h4>
                <p className="text-xs text-muted-foreground">
                  Encrypted bets ensure odds aren't manipulated by large bets
                </p>
              </Card>

              <Card className="p-4 bg-success/5 border-success/20">
                <CheckCircle className="w-6 h-6 text-success mb-2" />
                <h4 className="font-semibold text-sm mb-1">Trustless System</h4>
                <p className="text-xs text-muted-foreground">
                  Mathematical proof of fairness, no need to trust operators
                </p>
              </Card>
            </div>
          </div>

          {/* Technical comparison */}
          <Card className="p-4 bg-muted/30 border-border">
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
              <Badge variant="outline" className="bg-gradient-holo text-white border-none">VS</Badge>
              Traditional vs FHE Betting
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <h5 className="font-medium text-destructive mb-2">Traditional Betting</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Bets visible to operators</li>
                  <li>• Possible manipulation</li>
                  <li>• Trust required</li>
                  <li>• Privacy risks</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium text-success mb-2">FHE Betting</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Bets remain encrypted</li>
                  <li>• Manipulation impossible</li>
                  <li>• Trustless system</li>
                  <li>• Complete privacy</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Call to action */}
          <div className="flex gap-3">
            <Button variant="ghost" onClick={() => onOpenChange(false)} className="flex-1">
              Close
            </Button>
            <Button variant="cyber" onClick={() => onOpenChange(false)} className="flex-1">
              Start Encrypted Betting <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FHEModal;