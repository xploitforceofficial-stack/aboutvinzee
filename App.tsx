
import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Youtube,
  MessageCircle, 
  ExternalLink,
  Play,
  Users,
  Shield,
  Layers,
  Gamepad2,
  Eye,
  TrendingUp
} from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import LinkButton from './components/LinkButton';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [activeNow, setActiveNow] = useState(1);
  const [clickStats, setClickStats] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize Visitor Count from localStorage or start small
    const storedVisitors = localStorage.getItem('vinzee_visitors_v2');
    const initialVisitors = storedVisitors ? parseInt(storedVisitors) : 42; 
    const newCount = initialVisitors + 1;
    localStorage.setItem('vinzee_visitors_v2', newCount.toString());
    setVisitorCount(newCount);

    // Simulate Real-Time Visitor Growth
    const visitorInterval = setInterval(() => {
      setVisitorCount(prev => {
        const plus = Math.random() > 0.7 ? 1 : 0; // 30% chance to increase by 1
        const updated = prev + plus;
        localStorage.setItem('vinzee_visitors_v2', updated.toString());
        return updated;
      });
      // Also randomize "Active Now" to feel alive
      setActiveNow(Math.floor(Math.random() * 5) + 1);
    }, 5000);

    // Initialize Click Stats
    const storedClicks = localStorage.getItem('vinzee_click_stats_v2');
    if (storedClicks) {
      setClickStats(JSON.parse(storedClicks));
    }

    return () => clearInterval(visitorInterval);
  }, []);

  const handleLinkClick = (id: string) => {
    const updatedStats = {
      ...clickStats,
      [id]: (clickStats[id] || 0) + 1
    };
    setClickStats(updatedStats);
    localStorage.setItem('vinzee_click_stats_v2', JSON.stringify(updatedStats));
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start py-12 px-6 overflow-hidden">
      <ParticleBackground />

      {/* Main Container */}
      <div 
        className={`relative z-10 w-full max-w-xl transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {/* Header Section */}
        <header className="flex flex-col items-center text-center mb-10">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-purple-600 blur-3xl opacity-20 rounded-3xl"></div>
            <img 
              src="https://i.ibb.co.com/PHTpfjc/Whats-App-Image-2026-02-12-at-16-20-14-1.jpg" 
              alt="VINZEE Profile" 
              className="relative w-36 h-36 rounded-[2.5rem] object-cover border-2 border-white/10 shadow-2xl float-animation aspect-square"
            />
            <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-2xl border-2 border-black shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            About VINZEE
          </h1>
          <p className="text-purple-400 font-semibold tracking-wider text-sm uppercase mb-4">
            Founder of XploitForce
          </p>

          {/* Real-time Stats Display */}
          <div className="flex flex-col items-center gap-2 mb-8">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/5 backdrop-blur-md">
              <div className="flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Total Views: <span className="text-white">{visitorCount.toLocaleString()}</span>
                </span>
              </div>
              <div className="w-[1px] h-3 bg-white/10"></div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Online: <span className="text-white">{activeNow}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 max-w-sm px-4">
            <span className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/5 backdrop-blur-sm">Digital Creator</span>
            <span className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/5 backdrop-blur-sm">Roblox Enthusiast</span>
            <span className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/5 backdrop-blur-sm">Community Builder</span>
          </div>
        </header>

        {/* Social Quick Links */}
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="https://github.com/xploitforceofficial" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => handleLinkClick('github')}
            className="group flex flex-col items-center gap-1"
          >
            <Github className="w-7 h-7 text-gray-400 group-hover:text-white transition-all transform group-hover:scale-110" />
            <span className="text-[9px] text-gray-500 font-bold uppercase">{clickStats['github'] || 0}</span>
          </a>
          <a 
            href="https://www.youtube.com/@viunzee1" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => handleLinkClick('youtube')}
            className="group flex flex-col items-center gap-1"
          >
            <Youtube className="w-7 h-7 text-gray-400 group-hover:text-red-500 transition-all transform group-hover:scale-110" />
            <span className="text-[9px] text-gray-500 font-bold uppercase">{clickStats['youtube'] || 0}</span>
          </a>
          <a 
            href="https://www.tiktok.com/@viunze" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={() => handleLinkClick('tiktok')}
            className="group flex flex-col items-center gap-1"
          >
            <TikTokIcon className="w-7 h-7 text-gray-400 group-hover:text-pink-400 transition-all transform group-hover:scale-110" />
            <span className="text-[9px] text-gray-500 font-bold uppercase">{clickStats['tiktok'] || 0}</span>
          </a>
        </div>

        {/* Sections */}
        <main className="space-y-12">
          
          {/* Community Section */}
          <section>
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <h2 className="text-lg font-bold text-gray-300 uppercase tracking-widest">Community</h2>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                <TrendingUp className="w-3 h-3" />
                <span>{clickStats['community_wa'] || 0} Joins</span>
              </div>
            </div>
            <div className="glass-card rounded-[2.5rem] overflow-hidden p-3 transition-all hover:border-purple-500/30">
              <div className="relative aspect-square sm:aspect-video rounded-[2rem] overflow-hidden mb-4">
                <img 
                  src="https://i.ibb.co.com/Jw4FtzkJ/Whats-App-Image-2026-02-10-at-17-25-04-1.jpg" 
                  alt="XploitForce Banner" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600/90 text-[10px] font-bold uppercase tracking-tighter px-2 py-1 rounded-md">Official Community</span>
                </div>
              </div>
              <LinkButton 
                href="https://chat.whatsapp.com/I8hG44FLgrRAwQcS3lvEft"
                title="Join XploitForce Community"
                variant="primary"
                icon={<MessageCircle className="w-5 h-5" />}
                clickCount={clickStats['community_wa']}
                onClick={() => handleLinkClick('community_wa')}
              />
            </div>
          </section>

          {/* Project Section */}
          <section>
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-blue-400" />
                <h2 className="text-lg font-bold text-gray-300 uppercase tracking-widest">Featured Project</h2>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                <Play className="w-3 h-3" />
                <span>{clickStats['backdoor_game'] || 0} Played</span>
              </div>
            </div>
            <div className="glass-card rounded-[2.5rem] overflow-hidden p-3 transition-all hover:border-blue-500/30">
              <div className="relative aspect-square sm:aspect-video rounded-[2rem] overflow-hidden mb-4">
                <img 
                  src="https://i.ibb.co.com/67rf5385/no-Filter-1.webp" 
                  alt="Backdoor Map Preview" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                   <h3 className="text-xl font-bold">Backdoor Map</h3>
                   <p className="text-sm text-gray-400">Explore the custom realm</p>
                </div>
              </div>
              <LinkButton 
                href="https://www.roblox.com/games/110455794310785/bckdr"
                title="Play My Backdoor Map"
                variant="glass"
                icon={<Play className="w-5 h-5 fill-current" />}
                clickCount={clickStats['backdoor_game']}
                onClick={() => handleLinkClick('backdoor_game')}
              />
            </div>
          </section>

          {/* Other Links */}
          <section className="space-y-4">
             <div className="flex items-center justify-between mb-4 px-2">
              <div className="flex items-center gap-3">
                <ExternalLink className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-bold text-gray-300 uppercase tracking-widest">More Links</h2>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500 font-bold uppercase">
                <Gamepad2 className="w-3 h-3" />
                <span>{(clickStats['roblox_profile'] || 0) + (clickStats['roblox_music_id'] || 0)} Visits</span>
              </div>
            </div>
            <div className="glass-card rounded-[2.5rem] overflow-hidden p-3 transition-all hover:border-blue-500/30">
              <div className="relative aspect-square sm:aspect-video rounded-[2rem] overflow-hidden mb-4">
                <img
                  src="https://files.catbox.moe/sjlpvw.jpeg"
                  alt="Roblox Music ID Indonesian"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                   <h3 className="text-xl font-bold">Roblox Music ID Indonesian</h3>
                   <p className="text-sm text-gray-400">Explore the Indonesian Music ID</p>
                </div>
              </div>
              <LinkButton
                href="https://rblxid.vercel.app/"
                title="Open Roblox Music ID Indonesian"
                variant="glass"
                icon={<ExternalLink className="w-5 h-5" />}
                clickCount={clickStats['roblox_music_id']}
                onClick={() => handleLinkClick('roblox_music_id')}
              />
            </div>
            <LinkButton 
              href="https://www.roblox.com/users/6023480353/profile" 
              title="My Roblox Profile" 
              variant="glass" 
              icon={<Gamepad2 className="w-5 h-5" />}
              clickCount={clickStats['roblox_profile']}
              onClick={() => handleLinkClick('roblox_profile')}
            />
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-20 mb-10 text-center opacity-40">
          <p className="text-sm font-medium tracking-widest uppercase">
            &copy; {new Date().getFullYear()} VINZEE &bull; XploitForce
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
