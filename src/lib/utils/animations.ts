// Animations Framer Motion réutilisables
// Fade, Slide, Scale, Glow, etc.

import { Variants } from 'framer-motion';

// ============ FADE ANIMATIONS ============

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ============ SLIDE ANIMATIONS ============

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

// ============ SCALE ANIMATIONS ============

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export const scaleInHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

// ============ STAGGER CONTAINER ============

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// ============ NEON GLOW ANIMATIONS ============

export const glowPulse: Variants = {
  initial: {
    textShadow: '0 0 10px rgba(176, 0, 255, 0.5)',
  },
  animate: {
    textShadow: [
      '0 0 10px rgba(176, 0, 255, 0.5)',
      '0 0 20px rgba(255, 0, 255, 0.8)',
      '0 0 10px rgba(176, 0, 255, 0.5)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const glowBox: Variants = {
  initial: {
    boxShadow: '0 0 10px rgba(176, 0, 255, 0.5)',
  },
  animate: {
    boxShadow: [
      '0 0 10px rgba(176, 0, 255, 0.5)',
      '0 0 20px rgba(176, 0, 255, 0.7)',
      '0 0 30px rgba(255, 0, 255, 0.6)',
      '0 0 20px rgba(176, 0, 255, 0.5)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

// ============ FLOAT ANIMATIONS ============

export const float: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const floatSlow: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============ ROTATE ANIMATIONS ============

export const spin: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const rotateSlow: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// ============ PULSE ANIMATIONS ============

export const pulse: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

export const pulseGlow: Variants = {
  animate: {
    opacity: [1, 0.7, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  },
};

// ============ GLITCH ANIMATIONS ============

export const glitch: Variants = {
  animate: {
    x: [0, -2, 2, -2, 0],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

// ============ MODAL ANIMATIONS ============

export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2 },
  },
};

// ============ PAGE ANIMATIONS ============

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const pageTransition = {
  transition: { duration: 0.4 },
};

// ============ CARD ANIMATIONS ============

export const cardHover = {
  whileHover: {
    y: -5,
    boxShadow: '0 20px 40px rgba(176, 0, 255, 0.3)',
  },
};

export const cardTap = {
  whileTap: { scale: 0.98 },
};

// ============ BUTTON ANIMATIONS ============

export const buttonHover = {
  whileHover: {
    scale: 1.05,
    boxShadow: '0 0 20px rgba(176, 0, 255, 0.6)',
  },
  whileTap: { scale: 0.95 },
};

export const buttonGlowHover = {
  whileHover: {
    textShadow: '0 0 20px rgba(176, 0, 255, 0.8)',
  },
};

// ============ INPUT ANIMATIONS ============

export const inputFocus = {
  focus: {
    boxShadow: '0 0 20px rgba(176, 0, 255, 0.5)',
  },
};

// ============ LIST ANIMATIONS ============

export const listContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};
