import React from 'react';

interface LogoProps {
  className?: string;
}

export const DreamObserverLogo: React.FC<LogoProps> = ({ className = 'w-9 h-9' }) => {
  return (
    <img 
      src="/logo.svg" 
      alt="DreamObserver Logo" 
      className={`${className} rounded-full object-contain shrink-0`}
    />
  );
};
