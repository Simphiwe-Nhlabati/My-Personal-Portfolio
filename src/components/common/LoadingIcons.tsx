import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Database,
  Server,
  Cpu,
  Globe,
  Zap,
  Sparkles,
  Loader2,
  Activity,
} from 'lucide-react';
import { AnimatedIcon } from './AnimatedIcon';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
  variant?: 'spinner' | 'dots' | 'icons' | 'pulse' | 'orbit';
}

const sizeMap = {
  small: 24,
  medium: 40,
  large: 60,
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = '#a78bfa',
  text,
  variant = 'spinner',
}) => {
  const iconSize = sizeMap[size];

  const renderSpinner = () => (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      style={{ color }}
    >
      <Loader2 size={iconSize} />
    </motion.div>
  );

  const renderDots = () => (
    <div
      style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center',
      }}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-10, 0, -10],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            delay: i * 0.15,
            duration: 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: color,
          }}
        />
      ))}
    </div>
  );

  const renderIcons = () => {
    const icons = [Code2, Terminal, Database, Server, Cpu];
    return (
      <div
        style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center',
        }}
      >
        {icons.map((Icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              delay: index * 0.15,
              duration: 1.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ color }}
          >
            <Icon size={iconSize * 0.6} />
          </motion.div>
        ))}
      </div>
    );
  };

  const renderPulse = () => (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{ color }}
    >
      <Zap size={iconSize} />
    </motion.div>
  );

  const renderOrbit = () => (
    <div
      style={{
        position: 'relative',
        width: iconSize * 2,
        height: iconSize * 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          color,
        }}
      >
        <Globe size={iconSize * 0.5} />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          color: `${color}80`,
        }}
      >
        <Activity size={iconSize * 0.4} />
      </motion.div>
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'icons':
        return renderIcons();
      case 'pulse':
        return renderPulse();
      case 'orbit':
        return renderOrbit();
      default:
        return renderSpinner();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}
    >
      {renderVariant()}
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: '#94a3b8',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Page Transition Loader
interface PageLoaderProps {
  isLoading?: boolean;
  message?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  isLoading = true,
  message = 'Loading...',
}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(10, 10, 15, 0.95)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AnimatedIcon icon={Code2} size={40} color="#a78bfa" animation="float" />
                <AnimatedIcon icon={Terminal} size={40} color="#2dd4bf" animation="pulse" />
                <AnimatedIcon icon={Database} size={40} color="#f472b6" animation="wiggle" />
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <LoadingSpinner size="large" variant="spinner" text={message} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Icon Loading Sequence
interface LoadingSequenceProps {
  onComplete?: () => void;
  duration?: number;
}

export const LoadingSequence: React.FC<LoadingSequenceProps> = ({
  onComplete,
  duration = 2000,
}) => {
  const [step, setStep] = React.useState(0);
  const icons = [
    { icon: Code2, color: '#a78bfa', text: 'Initializing...' },
    { icon: Terminal, color: '#2dd4bf', text: 'Loading components...' },
    { icon: Database, color: '#f472b6', text: 'Fetching data...' },
    { icon: Server, color: '#fbbf24', text: 'Connecting to server...' },
    { icon: Cpu, color: '#4ade80', text: 'Optimizing...' },
    { icon: Sparkles, color: '#a78bfa', text: 'Ready!' },
  ];

  React.useEffect(() => {
    const interval = duration / icons.length;
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev >= icons.length - 1) {
          clearInterval(timer);
          setTimeout(() => onComplete?.(), 500);
          return prev;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onComplete, icons.length]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
        padding: 40,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 80,
          height: 80,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: icons[step].color,
            }}
          >
            {React.createElement(icons[step].icon, { size: 60 })}
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        key={`text-${step}`}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: icons[step].color,
            fontSize: '1rem',
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          {icons[step].text}
        </p>
        <div
          style={{
            width: 200,
            height: 4,
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / icons.length) * 100}%` }}
            transition={{ duration: 0.3 }}
            style={{
              height: '100%',
              background: `linear-gradient(90deg, ${icons[step].color}, ${icons[step].color}80)`,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

// Skeleton Loader with Icons
interface SkeletonLoaderProps {
  lines?: number;
  showIcon?: boolean;
  variant?: 'text' | 'card' | 'image';
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  lines = 3,
  showIcon = true,
  variant = 'text',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        padding: variant === 'card' ? 20 : 0,
        borderRadius: variant === 'card' ? 12 : 0,
        background: variant === 'card' ? 'rgba(255, 255, 255, 0.03)' : 'transparent',
        border: variant === 'card' ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
      }}
    >
      {showIcon && (
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: 'linear-gradient(90deg, rgba(167, 139, 250, 0.1) 0%, rgba(167, 139, 250, 0.2) 50%, rgba(167, 139, 250, 0.1) 100%)',
            backgroundSize: '200% 100%',
          }}
        />
      )}
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            delay: i * 0.1,
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{
            height: i === lines - 1 ? 12 : 16,
            width: i === lines - 1 ? '60%' : '100%',
            borderRadius: 4,
            background: 'linear-gradient(90deg, rgba(167, 139, 250, 0.1) 0%, rgba(167, 139, 250, 0.2) 50%, rgba(167, 139, 250, 0.1) 100%)',
            backgroundSize: '200% 100%',
          }}
        />
      ))}
    </div>
  );
};
