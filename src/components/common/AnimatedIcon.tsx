import React from 'react';
import { motion } from 'framer-motion';

type AnimationType = 
  | 'float'
  | 'pulse'
  | 'rotate'
  | 'bounce'
  | 'shake'
  | 'scale'
  | 'glow'
  | 'spin'
  | 'wiggle'
  | 'heartbeat'
  | 'orbit'
  | 'glitch';

interface AnimatedIconProps {
  icon: React.ElementType;
  size?: number;
  color?: string;
  animation?: AnimationType;
  duration?: number;
  hover?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const animationVariants: Record<AnimationType, any> = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  rotate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  bounce: {
    y: [-15, 0, -15],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
  shake: {
    x: [-5, 5, -5, 5, -5, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  scale: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  glow: {
    filter: ['drop-shadow(0 0 5px currentColor)', 'drop-shadow(0 0 20px currentColor)', 'drop-shadow(0 0 5px currentColor)'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  spin: {
    rotate: 360,
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  wiggle: {
    rotate: [-10, 10, -10, 10, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
  heartbeat: {
    scale: [1, 1.25, 1, 1.25, 1],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  orbit: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  glitch: {
    x: [-2, 2, -2, 2, 0, 0],
    opacity: [1, 0.8, 1, 0.8, 1, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

const hoverVariants = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  size = 24,
  color = '#a78bfa',
  animation = 'float',
  duration,
  hover = false,
  className,
  style,
}) => {
  const variant = animationVariants[animation];

  const customVariant = duration
    ? {
        ...variant,
        transition: {
          ...variant.transition,
          duration,
        },
      }
    : variant;

  return (
    <motion.div
      animate={customVariant as any}
      initial={false}
      whileHover={hover ? (hoverVariants.hover as any) : undefined}
      whileTap={hover ? { scale: 0.9 } : undefined}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};

// Icon Trail Component - Creates a trailing effect with multiple icons
interface IconTrailProps {
  icon: React.ElementType;
  count?: number;
  size?: number;
  color?: string;
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

export const IconTrail: React.FC<IconTrailProps> = ({
  icon: Icon,
  count = 5,
  size = 20,
  color = '#a78bfa',
  direction = 'horizontal',
  className,
}) => {
  return (
    <Box
      className={className}
      sx={{
        display: 'flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.5,
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1 - index * 0.15, scale: 1 - index * 0.1 }}
          transition={{
            delay: index * 0.1,
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <Icon size={size * (1 - index * 0.1)} color={color} />
        </motion.div>
      ))}
    </Box>
  );
};

// Icon Burst Component - Creates an exploding effect
interface IconBurstProps {
  icon: React.ElementType;
  size?: number;
  color?: string;
  count?: number;
  className?: string;
}

export const IconBurst: React.FC<IconBurstProps> = ({
  icon: Icon,
  size = 16,
  color = '#a78bfa',
  count = 8,
  className,
}) => {
  const angles = Array.from({ length: count }, (_, i) => (360 / count) * i);

  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {angles.map((angle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 2],
            x: Math.cos((angle * Math.PI) / 180) * 60,
            y: Math.sin((angle * Math.PI) / 180) * 60,
          }}
          transition={{
            delay: index * 0.1,
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          style={{
            position: 'absolute',
          }}
        >
          <Icon size={size} color={color} />
        </motion.div>
      ))}
    </Box>
  );
};

// Animated Icon Button
interface AnimatedIconButtonProps {
  icon: React.ElementType;
  onClick?: () => void;
  href?: string;
  size?: number;
  color?: string;
  animation?: AnimationType;
  className?: string;
  'aria-label'?: string;
}

export const AnimatedIconButton: React.FC<AnimatedIconButtonProps> = ({
  icon: Icon,
  onClick,
  href,
  size = 24,
  color = '#a78bfa',
  animation = 'pulse',
  className,
  'aria-label': ariaLabel,
}) => {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      whileHover={{
        scale: 1.15,
        rotate: 5,
        boxShadow: `0 8px 30px ${color}40`,
      }}
      whileTap={{ scale: 0.9, rotate: -5 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 48,
        height: 48,
        borderRadius: '12px',
        background: `${color}15`,
        border: `1px solid ${color}40`,
        color: color,
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      className={className}
    >
      <AnimatedIcon icon={Icon} size={size} color={color} animation={animation} />
    </Component>
  );
};

// Helper Box component for IconTrail and IconBurst
const Box: React.FC<{ children: React.ReactNode; className?: string; sx?: any }> = ({
  children,
  className,
  sx,
}) => (
  <div className={className} style={sx as React.CSSProperties}>
    {children}
  </div>
);
