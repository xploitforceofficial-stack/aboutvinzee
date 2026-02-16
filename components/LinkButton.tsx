
import React from 'react';

interface LinkButtonProps {
  href: string;
  title: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'glass';
  clickCount?: number;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, icon, variant = 'glass', clickCount = 0, onClick }) => {
  const baseStyles = "relative w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 font-medium text-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-purple-900/20 hover:scale-[1.02]",
    outline: "border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/5 text-white hover:scale-[1.02]",
    glass: "glass-card hover:bg-white/10 text-white hover:scale-[1.02] neon-border-hover"
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {icon && <span className="opacity-80">{icon}</span>}
      <span className="flex-grow text-center">{title}</span>
      {clickCount > 0 && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full border border-white/10 opacity-60">
          {clickCount.toLocaleString()} clicks
        </span>
      )}
    </a>
  );
};

export default LinkButton;
