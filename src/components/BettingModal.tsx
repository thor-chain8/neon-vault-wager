import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Wallet, ArrowRight, Shield } from "lucide-react";
import { useState } from "react";

interface BettingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  match?: {
    team1: string;
    team2: string;
    game: string;
    odds1: string;
    odds2: string;
  };
}

const BettingModal = ({ open, onOpenChange, match }: BettingModalProps) => {
  const [betAmount, setBetAmount] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<"team1" | "team2" | null>(null);
  const [step, setStep] = useState<"select" | "amount" | "confirm" | "success">("select");

  const handleTeamSelect = (team: "team1" | "team2") => {
    setSelectedTeam(team);
    setStep("amount");
  };

  const handleAmountConfirm = () => {
    if (betAmount) {
      setStep("confirm");
    }
  };

  const handleBetConfirm = () => {
    setStep("success");
  };

  const resetModal = () => {
    setStep("select");
    setSelectedTeam(null);
    setBetAmount("");
  };

  const handleClose = () => {
    resetModal();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-card border-primary/20 shadow-glow-primary">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-neon bg-clip-text text-transparent">
            Encrypted Betting
          </DialogTitle>
        </DialogHeader>

        {step === "select" && match && (
          <div className="space-y-6">
            <Card className="p-4 bg-muted/50 border-primary/10">
              <div className="text-center">
                <h3 className="font-semibold text-sm text-primary mb-2">{match.game}</h3>
                <div className="text-lg font-bold">{match.team1} vs {match.team2}</div>
              </div>
            </Card>

            <div className="space-y-3">
              <Label className="text-sm font-medium">Select your pick:</Label>
              
              <Button
                variant="outline"
                className="w-full h-auto p-4 hover:border-primary hover:shadow-glow-primary transition-all"
                onClick={() => handleTeamSelect("team1")}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="font-medium">{match.team1}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{match.odds1}</Badge>
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                className="w-full h-auto p-4 hover:border-primary hover:shadow-glow-primary transition-all"
                onClick={() => handleTeamSelect("team2")}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="font-medium">{match.team2}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{match.odds2}</Badge>
                    <Lock className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Button>
            </div>

            <div className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
              <Shield className="w-3 h-3" />
              Your selection will be encrypted until match ends
            </div>
          </div>
        )}

        {step === "amount" && (
          <div className="space-y-6">
            <Card className="p-4 bg-accent/10 border-accent/20">
              <div className="text-center">
                <div className="text-sm text-muted-foreground">Selected Team</div>
                <div className="font-semibold text-accent">
                  {selectedTeam === "team1" ? match?.team1 : match?.team2}
                </div>
                <div className="text-xs text-muted-foreground">
                  Odds: {selectedTeam === "team1" ? match?.odds1 : match?.odds2}
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              <Label htmlFor="amount">Bet Amount (ETH)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.1"
                step="0.01"
                min="0.01"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                className="text-center text-lg font-mono"
              />
              
              <div className="flex gap-2">
                {["0.1", "0.5", "1.0"].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    size="sm"
                    onClick={() => setBetAmount(amount)}
                    className="flex-1"
                  >
                    {amount} ETH
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => setStep("select")} className="flex-1">
                Back
              </Button>
              <Button 
                variant="neon" 
                onClick={handleAmountConfirm}
                disabled={!betAmount}
                className="flex-1"
              >
                Continue <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}

        {step === "confirm" && (
          <div className="space-y-6">
            <Card className="p-4 bg-gradient-neon/10 border-primary/30">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team:</span>
                  <span className="font-semibold">
                    {selectedTeam === "team1" ? match?.team1 : match?.team2}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Odds:</span>
                  <span>{selectedTeam === "team1" ? match?.odds1 : match?.odds2}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bet Amount:</span>
                  <span className="font-mono">{betAmount} ETH</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="text-muted-foreground">Potential Win:</span>
                  <span className="font-semibold text-success">
                    {(parseFloat(betAmount) * parseFloat(selectedTeam === "team1" ? match?.odds1 || "0" : match?.odds2 || "0")).toFixed(3)} ETH
                  </span>
                </div>
              </div>
            </Card>

            <div className="text-xs text-center text-muted-foreground bg-muted/30 p-3 rounded-lg">
              <Lock className="w-4 h-4 mx-auto mb-1" />
              Your bet will be encrypted on-chain and revealed only after the match ends
            </div>

            <div className="flex gap-3">
              <Button variant="ghost" onClick={() => setStep("amount")} className="flex-1">
                Back
              </Button>
              <Button variant="holo" onClick={handleBetConfirm} className="flex-1">
                <Wallet className="w-4 h-4 mr-1" />
                Confirm Bet
              </Button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8 text-success animate-pulse" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-success mb-2">Bet Encrypted!</h3>
              <p className="text-muted-foreground text-sm">
                Your bet has been successfully encrypted and submitted to the blockchain. 
                It will remain confidential until the match ends.
              </p>
            </div>

            <Card className="p-4 bg-success/10 border-success/20">
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Transaction ID:</span>
                  <span className="font-mono">0x7a8b...9c2d</span>
                </div>
                <div className="flex justify-between">
                  <span>Encryption Status:</span>
                  <span className="text-success">✓ Secured</span>
                </div>
              </div>
            </Card>

            <Button variant="neon" onClick={handleClose} className="w-full">
              Done
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BettingModal;