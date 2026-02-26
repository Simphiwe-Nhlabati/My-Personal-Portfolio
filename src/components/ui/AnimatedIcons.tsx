import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Layers,
  Zap,
  Rocket,
  Star,
  Heart,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Send,
  Menu,
  X,
  User,
  MessageSquare,
  Cpu,
  ShieldCheck,
  GitBranch,
  CheckCircle,
  Circle,
  Play,
  Pause,
  RefreshCw,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Briefcase,
  BookOpen,
  Clock,
  MapPin,
  Calendar,
  Download,
  Share2,
  Bookmark,
  Eye,
  ThumbsUp,
  MessageCircle,
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Info,
} from 'lucide-react';

// Animation variants
export const iconAnimations = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  pulse: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  rotate: {
    rotate: [0, 360],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  },
  bounce: {
    y: [0, -15, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  shimmer: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
  glow: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Animated Icon Component
interface AnimatedIconProps {
  icon: React.ElementType;
  size?: number;
  color?: string;
  animation?: keyof typeof iconAnimations;
  className?: string;
  style?: React.CSSProperties;
  whileHover?: Record<string, unknown>;
  onClick?: () => void;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  icon: Icon,
  size = 24,
  color = 'currentColor',
  animation,
  className = '',
  style,
  whileHover,
  onClick,
}) => {
  return (
    <motion.div
      animate={animation ? (iconAnimations[animation] as any) : {}}
      whileHover={(whileHover || { scale: 1.1, rotate: 5 }) as any}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      style={{ display: 'inline-flex', ...style }}
      className={className}
      onClick={onClick}
    >
      <Icon size={size} color={color} />
    </motion.div>
  );
};

// Pre-configured animated icons
export const AnimatedIcons = {
  FloatingCode: (props: Partial<AnimatedIconProps>) => (
    <AnimatedIcon icon={Code} animation="float" {...props} />
  ),
  PulsingStar: (props: Partial<AnimatedIconProps>) => (
    <AnimatedIcon icon={Star} animation="pulse" {...props} />
  ),
  RotatingRefresh: (props: Partial<AnimatedIconProps>) => (
    <AnimatedIcon icon={RefreshCw} animation="rotate" {...props} />
  ),
  BouncingRocket: (props: Partial<AnimatedIconProps>) => (
    <AnimatedIcon icon={Rocket} animation="bounce" {...props} />
  ),
  ShimmerSparkle: (props: Partial<AnimatedIconProps>) => (
    <AnimatedIcon icon={Sparkles} animation="shimmer" {...props} />
  ),
  GlowingHeart: (props: Partial<AnimatedIconProps>) => (
    <AnimatedIcon icon={Heart} animation="glow" {...props} />
  ),
};

// Icon Button Component
interface IconButtonProps {
  icon: React.ElementType;
  href?: string;
  onClick?: () => void;
  size?: number;
  color?: string;
  bgColor?: string;
  label?: string;
  gradient?: string;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  href,
  onClick,
  size = 20,
  color = '#f8fafc',
  bgColor = 'rgba(255, 255, 255, 0.05)',
  label,
  gradient,
  className = '',
}) => {
  const content = (
    <motion.div
      whileHover={{
        scale: 1.1,
        y: -4,
        boxShadow: '0 12px 30px rgba(167, 139, 250, 0.4)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 44,
        height: 44,
        borderRadius: '12px',
        background: gradient || bgColor,
        border: `1px solid ${gradient ? 'transparent' : 'rgba(255, 255, 255, 0.08)'}`,
        cursor: href || onClick ? 'pointer' : 'default',
        color,
      }}
      className={className}
    >
      <Icon size={size} />
      {label && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          style={{
            position: 'absolute',
            left: '100%',
            marginLeft: 10,
            fontSize: '0.8rem',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            color: '#f8fafc',
          }}
        >
          {label}
        </motion.span>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        {content}
      </a>
    );
  }

  return <div onClick={onClick}>{content}</div>;
};

// Animated Arrow Component
export const AnimatedArrow: React.FC<{ color?: string; size?: number }> = ({
  color = '#a78bfa',
  size = 18,
}) => (
  <motion.div
    animate={{ x: [0, 5, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
    style={{ display: 'inline-flex' }}
  >
    <ArrowRight size={size} color={color} />
  </motion.div>
);

// Animated Check Component
export const AnimatedCheck: React.FC<{ completed?: boolean; size?: number; color?: string }> = ({
  completed = false,
  size = 20,
  color = '#4ade80',
}) => (
  <motion.div
    animate={completed ? { scale: [1, 1.2, 1] } : {}}
    transition={{ duration: 0.3 }}
    style={{ display: 'inline-flex' }}
  >
    {completed ? (
      <CheckCircle size={size} color={color} />
    ) : (
      <Circle size={size} color="#64748b" />
    )}
  </motion.div>
);

// Progress Dot Component
export const ProgressDot: React.FC<{ active?: boolean; completed?: boolean; size?: number }> = ({
  active = false,
  completed = false,
  size = 12,
}) => (
  <motion.div
    animate={
      active
        ? {
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }
        : {}
    }
    transition={{ duration: 2, repeat: active ? Infinity : 0 }}
    style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: completed ? '#4ade80' : active ? '#a78bfa' : '#475569',
      boxShadow: completed || active ? `0 0 10px ${completed ? '#4ade80' : '#a78bfa'}` : 'none',
    }}
  />
);

// Animated Badge Component
export const AnimatedBadge: React.FC<{
  icon?: React.ElementType;
  text: string;
  color?: string;
  pulse?: boolean;
}> = ({ icon: Icon, text, color = '#a78bfa', pulse = false }) => (
  <motion.div
    animate={pulse ? { boxShadow: ['0 0 0 0 rgba(167, 139, 250, 0.4)', '0 0 0 10px rgba(167, 139, 250, 0)'] } : {}}
    transition={pulse ? { duration: 2, repeat: Infinity } : {}}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 16px',
      borderRadius: '999px',
      background: `${color}15`,
      border: `1px solid ${color}40`,
    }}
  >
    {Icon && <Icon size={14} color={color} />}
    <span style={{ fontSize: '0.75rem', fontWeight: 600, color, letterSpacing: '0.08em' }}>
      {text}
    </span>
  </motion.div>
);

// Skill Icon with Animation
export const AnimatedSkillIcon: React.FC<{
  iconUrl: string;
  name: string;
  delay?: number;
}> = ({ iconUrl, name, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{
      y: -8,
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
    style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <motion.div
      whileHover={{
        background: 'rgba(167, 139, 250, 0.2)',
        borderRadius: '16px',
      }}
      style={{
        padding: 8,
        transition: 'all 0.3s ease',
      }}
    >
      <img
        src={iconUrl}
        alt={name}
        title={name}
        style={{
          width: 52,
          height: 52,
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
        }}
      />
    </motion.div>
  </motion.div>
);

// Section Header with Icon
export const AnimatedSectionHeader: React.FC<{
  icon: React.ElementType;
  label: string;
  color?: string;
}> = ({ icon: Icon, label, color = '#a78bfa' }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 20px',
      borderRadius: '999px',
      background: `${color}10`,
      border: `1px solid ${color}30`,
      marginBottom: 16,
    }}
  >
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <Icon size={14} color={color} />
    </motion.div>
    <span style={{ fontSize: '0.75rem', fontWeight: 700, color, letterSpacing: '0.12em' }}>
      {label}
    </span>
  </motion.div>
);

// Card Icon Decorator
export const CardIconDecorator: React.FC<{
  icon: React.ElementType;
  color?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}> = ({ icon: Icon, color = '#a78bfa', position = 'top-right' }) => {
  const positionStyles = {
    'top-right': { top: 16, right: 16 },
    'top-left': { top: 16, left: 16 },
    'bottom-right': { bottom: 16, right: 16 },
    'bottom-left': { bottom: 16, left: 16 },
  };

  return (
    <motion.div
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.1, 1],
      }}
      transition={{ duration: 4, repeat: Infinity }}
      style={{
        position: 'absolute',
        ...positionStyles[position],
        color: `${color}40`,
      }}
    >
      <Icon size={48} />
    </motion.div>
  );
};

// Animated Divider with Icons
export const AnimatedDivider: React.FC<{ icon?: React.ElementType; color?: string }> = ({
  icon: Icon = Star,
  color = '#a78bfa',
}) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '24px 0' }}>
    <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }} />
    {Icon && (
      <motion.div
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      >
        <Icon size={16} color={color} />
      </motion.div>
    )}
    <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }} />
  </div>
);

// Hover Reveal Icon
export const HoverRevealIcon: React.FC<{
  icon: React.ElementType;
  revealText: string;
  color?: string;
}> = ({ icon: Icon, revealText, color = '#a78bfa' }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    style={{
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      borderRadius: '12px',
      background: `${color}10`,
      border: `1px solid ${color}30`,
      overflow: 'hidden',
      cursor: 'pointer',
    }}
  >
    <Icon size={20} color={color} />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ opacity: 1, y: 0 }}
      style={{
        position: 'absolute',
        bottom: '100%',
        marginBottom: 8,
        padding: '6px 12px',
        borderRadius: '8px',
        background: `${color}e6`,
        color: '#0a0a0f',
        fontSize: '0.75rem',
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}
    >
      {revealText}
    </motion.div>
  </motion.div>
);

export {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Layers,
  Zap,
  Rocket,
  Star,
  Heart,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Send,
  Menu,
  X,
  User,
  MessageSquare,
  Cpu,
  ShieldCheck,
  GitBranch,
  CheckCircle,
  Circle,
  Play,
  Pause,
  RefreshCw,
  Award,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  Briefcase,
  BookOpen,
  Clock,
  MapPin,
  Calendar,
  Download,
  Share2,
  Bookmark,
  Eye,
  ThumbsUp,
  MessageCircle,
  ArrowUpRight,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Info,
};
