
import React from 'react';

interface LinkButtonProps {
  href: string;
  title: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'outline' | 'glass';
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, title, icon, variant = 'glass' }) => {
  const baseStyles = "w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 font-medium text-lg";
  
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
      className={`${baseStyles} ${variants[variant]}`}
    >
      {icon && <span className="opacity-80">{icon}</span>}
      {title}
    </a>
  );
};

export default LinkButton;
