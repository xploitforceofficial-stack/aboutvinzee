
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
  Gamepad2
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            VINZEE
          </h1>
          <p className="text-purple-400 font-semibold tracking-wider text-sm uppercase mb-4">
            Founder of XploitForce
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-sm px-4">
            <span className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/5 backdrop-blur-sm">Digital Creator</span>
            <span className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/5 backdrop-blur-sm">Roblox Enthusiast</span>
            <span className="bg-white/5 px-3 py-1 rounded-full text-xs text-gray-400 border border-white/5 backdrop-blur-sm">Community Builder</span>
          </div>
        </header>

        {/* Social Quick Links */}
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="https://github.com/xploitforceofficial-stack" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-all transform hover:scale-110"
          >
            <Github className="w-7 h-7" />
          </a>
          <a 
            href="https://www.youtube.com/@viunzee1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-red-500 transition-all transform hover:scale-110"
          >
            <Youtube className="w-7 h-7" />
          </a>
          <a 
            href="https://www.tiktok.com/@viunze" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-pink-400 transition-all transform hover:scale-110"
          >
            <TikTokIcon className="w-7 h-7" />
          </a>
        </div>

        {/* Sections */}
        <main className="space-y-12">
          
          {/* Community Section */}
          <section>
            <div className="flex items-center gap-3 mb-4 px-2">
              <Users className="w-5 h-5 text-purple-400" />
              <h2 className="text-lg font-bold text-gray-300 uppercase tracking-widest">Community</h2>
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
              />
            </div>
          </section>

          {/* Project Section */}
          <section>
            <div className="flex items-center gap-3 mb-4 px-2">
              <Layers className="w-5 h-5 text-blue-400" />
              <h2 className="text-lg font-bold text-gray-300 uppercase tracking-widest">Featured Project</h2>
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
              />
            </div>
          </section>

          {/* Other Links */}
          <section className="space-y-4">
             <div className="flex items-center gap-3 mb-4 px-2">
              <ExternalLink className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-bold text-gray-300 uppercase tracking-widest">More Links</h2>
            </div>
            <LinkButton 
              href="https://www.roblox.com/users/6023480353/profile" 
              title="My Roblox Profile" 
              variant="glass" 
              icon={<Gamepad2 className="w-5 h-5" />}
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
