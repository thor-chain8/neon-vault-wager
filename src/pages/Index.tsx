import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatchCard from "@/components/MatchCard";
import BettingModal from "@/components/BettingModal";
import FHEModal from "@/components/FHEModal";
import { EncryptedBetting } from "@/components/EncryptedBetting";
import { Lock, Zap, Shield, TrendingUp, Coins } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [bettingModalOpen, setBettingModalOpen] = useState(false);
  const [fheModalOpen, setFheModalOpen] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<any>(null);

  const liveMatches = [
    {
      team1: "FaZe Clan",
      team2: "G2 Esports",
      game: "CS2 Major",
      time: "Live",
      viewers: "234K",
      status: "live" as const,
      odds1: "1.85",
      odds2: "2.1"
    },
    {
      team1: "TSM",
      team2: "Team Liquid",
      game: "Valorant Champions",
      time: "2:30 PM",
      viewers: "156K",
      status: "upcoming" as const,
      odds1: "1.6",
      odds2: "2.4"
    },
    {
      team1: "Cloud9",
      team2: "100 Thieves",
      game: "League of Legends",
      time: "4:00 PM",
      viewers: "189K",
      status: "upcoming" as const,
      odds1: "2.2",
      odds2: "1.7"
    }
  ];

  const handleStartBetting = () => {
    // Use the first available match as default for demo
    setSelectedMatch(liveMatches[0]);
    setBettingModalOpen(true);
  };

  const handleMatchBet = (match: any) => {
    setSelectedMatch(match);
    setBettingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-neon bg-clip-text text-transparent animate-glitch">
                Encrypted eSports
              </span>
              <br />
              <span className="text-foreground">Betting Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Place confidential bets on live eSports matches. Your wagers remain encrypted 
              until final results are revealed through FHE technology.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="neon" size="lg" className="flex items-center gap-2" onClick={handleStartBetting}>
              <Zap className="w-5 h-5" />
              Start Encrypted Betting
            </Button>
            <Button variant="cyber" size="lg" className="flex items-center gap-2" onClick={() => setFheModalOpen(true)}>
              <Shield className="w-5 h-5" />
              Learn About FHE
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 bg-card/60 border-primary/20 shadow-glow-primary">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">$2.4M</div>
              <div className="text-sm text-muted-foreground">Total Encrypted</div>
            </Card>
            <Card className="p-6 bg-card/60 border-accent/20 shadow-glow-accent">
              <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">15,847</div>
              <div className="text-sm text-muted-foreground">Active Bettors</div>
            </Card>
            <Card className="p-6 bg-card/60 border-secondary/20 shadow-glow-secondary">
              <Shield className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Privacy Secured</div>
            </Card>
            <Card className="p-6 bg-card/60 border-primary/20 shadow-glow-primary">
              <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">89</div>
              <div className="text-sm text-muted-foreground">Live Matches</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              Live & Upcoming Matches
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {liveMatches.map((match, index) => (
              <div key={index} onClick={() => handleMatchBet(match)} className="cursor-pointer">
                <MatchCard {...match} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="holo" size="lg">
              View All Matches
            </Button>
          </div>
        </div>
      </section>

      {/* Encrypted Betting Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              FHE Encrypted Betting
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <EncryptedBetting vaultId={1} onSuccess={() => {
              toast.success('Encrypted bet created successfully!');
            }} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-holo bg-clip-text text-transparent">
              How Encrypted Betting Works
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card/60 border-primary/20 shadow-glow-primary">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">1. Place Encrypted Bet</h3>
              <p className="text-muted-foreground">
                Your bet amount and choice are encrypted using FHE technology, 
                keeping them completely private.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card/60 border-accent/20 shadow-glow-accent">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">2. Match Progresses</h3>
              <p className="text-muted-foreground">
                Watch the live eSports match unfold while your encrypted bet 
                remains confidential on the blockchain.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card/60 border-secondary/20 shadow-glow-secondary">
              <div className="bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">3. Automatic Payout</h3>
              <p className="text-muted-foreground">
                After match completion, results are revealed and winnings 
                are automatically distributed to winners.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <BettingModal 
        open={bettingModalOpen} 
        onOpenChange={setBettingModalOpen}
        match={selectedMatch}
      />
      <FHEModal 
        open={fheModalOpen} 
        onOpenChange={setFheModalOpen}
      />
    </div>
  );
};

export default Index;