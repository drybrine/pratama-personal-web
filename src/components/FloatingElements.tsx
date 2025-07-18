import React from 'react';

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '2.5s' }}></div>
      <div className="absolute bottom-20 right-32 w-5 h-5 bg-accent/25 rounded-full animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      <div className="absolute top-1/2 left-8 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
      <div className="absolute top-1/3 right-12 w-4 h-4 bg-accent/35 rounded-full animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '3.2s' }}></div>
      
      {/* Floating code symbols */}
      <div className="absolute top-24 right-40 text-primary/20 animate-bounce text-2xl" style={{ animationDelay: '1s', animationDuration: '4s' }}>&lt;/&gt;</div>
      <div className="absolute bottom-40 left-32 text-accent/30 animate-pulse text-xl" style={{ animationDelay: '2s', animationDuration: '3s' }}>{ }</div>
      <div className="absolute top-1/2 right-24 text-primary/25 animate-bounce text-lg" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>🚀</div>
      <div className="absolute bottom-1/3 left-20 text-accent/20 animate-pulse text-xl" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}>💻</div>
    </div>
  );
};

export default FloatingElements;