import { Trophy, Crown, Medal, Star } from "lucide-react";

const HolographicTrophy = () => {
  const trophies = [
    { icon: Trophy, color: "text-yellow-400", delay: "0s" },
    { icon: Crown, color: "text-purple-400", delay: "1s" },
    { icon: Medal, color: "text-blue-400", delay: "2s" },
    { icon: Star, color: "text-green-400", delay: "3s" },
  ];

  return (
    <div className="flex justify-center gap-8">
      {trophies.map((trophy, index) => {
        const IconComponent = trophy.icon;
        return (
          <div
            key={index}
            className="relative"
            style={{ animationDelay: trophy.delay }}
          >
            <div className="animate-rotate-holo">
              <IconComponent className={`w-16 h-16 ${trophy.color} drop-shadow-lg`} />
            </div>
            
            {/* Holographic effect */}
            <div className="absolute inset-0 animate-rotate-holo opacity-30">
              <IconComponent className="w-16 h-16 text-white blur-sm" />
            </div>
            
            {/* Team banners underneath */}
            <div className="mt-2 text-center">
              <div className="w-12 h-3 bg-gradient-holo rounded mx-auto opacity-60 animate-pulse" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HolographicTrophy;