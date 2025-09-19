import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Trophy, Lock } from "lucide-react";

interface MatchProps {
  team1: string;
  team2: string;
  game: string;
  time: string;
  viewers: string;
  status: "live" | "upcoming" | "ended";
  odds1: string;
  odds2: string;
}

const MatchCard = ({ team1, team2, game, time, viewers, status, odds1, odds2 }: MatchProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "live": return "bg-success";
      case "upcoming": return "bg-warning";
      case "ended": return "bg-muted";
      default: return "bg-primary";
    }
  };

  return (
    <Card className="relative p-6 bg-card/80 border-primary/20 shadow-cyber hover:shadow-glow-primary transition-all duration-300 overflow-hidden group">
      {/* Animated overlay effect */}
      <div className="absolute inset-0 bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className={`${getStatusColor()} text-white border-none`}>
            {status.toUpperCase()}
          </Badge>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {time}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {viewers}
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="text-sm text-primary mb-2">{game}</h3>
          <div className="text-xl font-bold text-foreground mb-2">
            {team1} <span className="text-muted-foreground mx-2">vs</span> {team2}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="bet" className="flex-1 flex flex-col items-center py-3">
            <span className="text-sm">{team1}</span>
            <span className="text-lg font-bold">{odds1}</span>
            <Lock className="w-3 h-3 mt-1 opacity-60" />
          </Button>
          <Button variant="bet" className="flex-1 flex flex-col items-center py-3">
            <span className="text-sm">{team2}</span>
            <span className="text-lg font-bold">{odds2}</span>
            <Lock className="w-3 h-3 mt-1 opacity-60" />
          </Button>
        </div>

        <div className="mt-3 text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" />
          Bets revealed after match ends
        </div>
      </div>
    </Card>
  );
};

export default MatchCard;