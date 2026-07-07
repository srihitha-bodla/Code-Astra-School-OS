import React from 'react';

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src="/logo.jpg" 
      alt="School OS Logo" 
      className={`object-contain bg-white rounded-lg ${className}`} 
    />
  );
}
