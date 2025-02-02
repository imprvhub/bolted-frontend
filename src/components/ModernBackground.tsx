import { type FC, type ReactNode } from 'react';

interface ModernBackgroundProps {
  children?: ReactNode;
}

const ModernBackground: FC<ModernBackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 relative">
      {/* Blob decorations */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {/* Turquoise blob */}
        <div 
          className="absolute top-1/4 -left-24 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
          style={{ backgroundColor: '#00E1A5' }}
        />
        
        {/* Cyan blob */}
        <div 
          className="absolute top-1/3 -right-24 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
          style={{ 
            backgroundColor: '#00DAF1',
            animationDelay: '2s'
          }}
        />
        
        {/* Yellow blob */}
        <div 
          className="absolute -bottom-32 left-1/2 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"
          style={{ 
            backgroundColor: '#FEDB01',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Scrollable content container */}
      <div className="relative min-h-screen overflow-y-auto pb-[32rem] md:pb-96">
        {children}
      </div>
    </div>
  );
};

export default ModernBackground;