import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Database,
  Server,
  Cpu,
  Globe,
  Zap,
  Sparkles,
  GitBranch,
  Layers,
} from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  icon: React.ElementType;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

interface IconParticlesProps {
  count?: number;
  colors?: string[];
  icons?: React.ElementType[];
  sizeRange?: [number, number];
  className?: string;
}

export const IconParticles: React.FC<IconParticlesProps> = ({
  count = 20,
  colors = ['#a78bfa', '#2dd4bf', '#f472b6', '#fbbf24', '#4ade80'],
  icons = [Code2, Terminal, Database, Server, Cpu, Globe, Zap, Sparkles, GitBranch, Layers],
  sizeRange = [12, 30],
  className,
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        icon: icons[Math.floor(Math.random() * icons.length)],
        size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, [count, colors.length, sizeRange[0], sizeRange[1]]);

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [`${particle.x}%`, `${Math.random() * 100}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${Math.random() * 100}%`, `${particle.y}%`],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            color: particle.color,
            opacity: 0.15,
          }}
        >
          <particle.icon size={particle.size} />
        </motion.div>
      ))}
    </div>
  );
};

// Icon Wave Component - Creates a wave animation
interface IconWaveProps {
  icon: React.ElementType;
  count?: number;
  size?: number;
  color?: string;
  className?: string;
}

export const IconWave: React.FC<IconWaveProps> = ({
  icon: Icon,
  count = 10,
  size = 24,
  color = '#a78bfa',
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            delay: index * 0.1,
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            color: color,
          }}
        >
          <Icon size={size * (0.5 + Math.sin(index / count) * 0.5)} />
        </motion.div>
      ))}
    </div>
  );
};

// Icon Grid Background
interface IconGridBackgroundProps {
  icons?: React.ElementType[];
  gridSize?: number;
  color?: string;
  animated?: boolean;
  className?: string;
}

export const IconGridBackground: React.FC<IconGridBackgroundProps> = ({
  icons = [Code2, Terminal, Database, Server],
  gridSize = 60,
  color = '#a78bfa',
  animated = true,
  className,
}) => {
  const [grid, setGrid] = useState<{ icon: React.ElementType; delay: number }[][]>([]);

  useEffect(() => {
    const cols = Math.floor(window.innerWidth / gridSize);
    const rows = Math.floor(window.innerHeight / gridSize);
    const newGrid: { icon: React.ElementType; delay: number }[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: { icon: React.ElementType; delay: number }[] = [];
      for (let j = 0; j < cols; j++) {
        row.push({
          icon: icons[Math.floor(Math.random() * icons.length)],
          delay: Math.random() * 2,
        });
      }
      newGrid.push(row);
    }

    setGrid(newGrid);
  }, [gridSize, icons.length]);

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, ${gridSize}px)`,
        gridTemplateRows: `repeat(auto-fill, ${gridSize}px)`,
        gap: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.03,
      }}
    >
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <motion.div
            key={`${i}-${j}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: animated ? [0.02, 0.08, 0.02] : 0.05,
              scale: animated ? [1, 1.1, 1] : 1,
            }}
            transition={{
              delay: cell.delay,
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: color,
            }}
          >
            <cell.icon size={20} />
          </motion.div>
        ))
      )}
    </div>
  );
};

// Icon Path Animation - Icons following a path
interface IconPathProps {
  icon: React.ElementType;
  count?: number;
  color?: string;
  size?: number;
  path?: 'circle' | 'figure8' | 'line';
  duration?: number;
  className?: string;
}

export const IconPath: React.FC<IconPathProps> = ({
  icon: Icon,
  count = 6,
  color = '#a78bfa',
  size = 20,
  path = 'circle',
  duration = 10,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            delay: index * 0.5,
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: 'absolute',
            color: color,
          }}
        >
          <motion.div
            animate={
              path === 'circle'
                ? {
                    rotate: 360,
                    x: [0, 200, 0, -200, 0],
                    y: [100, 0, -100, 0, 100],
                  }
                : path === 'figure8'
                ? {
                    x: [0, 100, 0, -100, 0],
                    y: [0, 50, 0, -50, 0],
                    rotate: [0, 180, 360, 180, 0],
                  }
                : {
                    x: [-300, 300],
                    y: 0,
                  }
            }
            transition={{
              duration: duration,
              delay: index * (duration / count),
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <Icon size={size} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Icon Explosion on Click
interface IconExplosionProps {
  icon: React.ElementType;
  trigger?: boolean;
  onTrigger?: () => void;
  count?: number;
  color?: string;
  size?: number;
  className?: string;
}

export const IconExplosion: React.FC<IconExplosionProps> = ({
  icon: Icon,
  trigger = false,
  onTrigger,
  count = 12,
  color = '#a78bfa',
  size = 16,
  className,
}) => {
  const [explode, setExplode] = useState(false);

  useEffect(() => {
    if (trigger) {
      setExplode(true);
      const timer = setTimeout(() => setExplode(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  const handleClick = () => {
    setExplode(true);
    onTrigger?.();
    setTimeout(() => setExplode(false), 1500);
  };

  return (
    <div
      className={className}
      onClick={handleClick}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      <Icon size={size * 1.5} color={color} />
      {explode &&
        Array.from({ length: count }).map((_, index) => {
          const angle = (360 / count) * index;
          const distance = 80 + Math.random() * 40;
          return (
            <motion.div
              key={index}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
              }}
              animate={{
                x: Math.cos((angle * Math.PI) / 180) * distance,
                y: Math.sin((angle * Math.PI) / 180) * distance,
                opacity: 0,
                scale: 0,
                rotate: angle,
              }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                color: color,
              }}
            >
              <Icon size={size} />
            </motion.div>
          );
        })}
    </div>
  );
};
