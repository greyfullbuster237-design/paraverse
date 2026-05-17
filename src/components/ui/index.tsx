'use client';

// Composants UI réutilisables pour Paraverse

import React from 'react';

// ============= BUTTON COMPONENT =============
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', isLoading, className, children, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2';
    const variantStyles = {
      primary: 'bg-gradient-neon text-white hover:shadow-neon-lg border border-neon-violet/50',
      secondary: 'bg-dark-surface2 text-neon-cyan border border-neon-cyan/50 hover:border-neon-cyan hover:shadow-neon-cyan',
      ghost: 'bg-transparent text-neon-violet border border-neon-violet/30 hover:border-neon-violet',
      danger: 'bg-red-600/20 text-red-400 border border-red-500/50 hover:bg-red-600/30',
    };
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

// ============= CARD COMPONENT =============
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'neon' | 'glow';
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    const variantStyles = {
      default: 'bg-dark-surface border border-dark-border',
      neon: 'bg-dark-surface border border-neon-violet/30 shadow-neon-md hover:shadow-neon-lg hover:border-neon-violet/60',
      glow: 'bg-dark-surface/50 backdrop-blur border border-neon-cyan/30 shadow-neon-cyan',
    };

    return (
      <div
        ref={ref}
        className={`rounded-xl p-6 transition-all duration-300 ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = 'Card';

// ============= INPUT COMPONENT =============
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, icon, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-dark-text mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neon-cyan">{icon}</div>}
          <input
            ref={ref}
            className={`
              w-full px-4 py-2.5 rounded-lg
              bg-dark-surface2 border border-dark-border
              text-dark-text placeholder-dark-text2
              focus:outline-none focus:border-neon-violet focus:shadow-neon-md
              transition-all duration-300
              ${icon ? 'pl-10' : ''}
              ${error ? 'border-red-500 focus:border-red-500' : ''}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';

// ============= TEXTAREA COMPONENT =============
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, label, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-dark-text mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`
            w-full px-4 py-2.5 rounded-lg
            bg-dark-surface2 border border-dark-border
            text-dark-text placeholder-dark-text2
            focus:outline-none focus:border-neon-violet focus:shadow-neon-md
            transition-all duration-300 resize-none
            ${error ? 'border-red-500 focus:border-red-500' : ''}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);
TextArea.displayName = 'TextArea';

// ============= BADGE COMPONENT =============
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'neon-violet' | 'neon-cyan' | 'neon-magenta' | 'neon-lime' | 'neon-pink';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ color = 'neon-violet', className, children, ...props }, ref) => {
    const colorStyles = {
      'neon-violet': 'bg-neon-violet/20 text-neon-violet border-neon-violet/50',
      'neon-cyan': 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/50',
      'neon-magenta': 'bg-neon-magenta/20 text-neon-magenta border-neon-magenta/50',
      'neon-lime': 'bg-neon-lime/20 text-neon-lime border-neon-lime/50',
      'neon-pink': 'bg-neon-pink/20 text-neon-pink border-neon-pink/50',
    };

    return (
      <span
        ref={ref}
        className={`
          inline-block px-3 py-1 rounded-full text-xs font-semibold
          border ${colorStyles[color]}
          ${className}
        `}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Badge.displayName = 'Badge';

// ============= MODAL COMPONENT =============
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <Card variant="neon" className="relative z-10 max-w-md w-full mx-4">
        {title && (
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-dark-border">
            <h2 className="text-xl font-bold text-glow">{title}</h2>
            <button
              onClick={onClose}
              className="text-dark-text2 hover:text-neon-cyan transition-colors"
            >
              ✕
            </button>
          </div>
        )}
        {children}
      </Card>
    </div>
  );
};

// ============= SPINNER COMPONENT =============
interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'violet' | 'cyan' | 'magenta';
}

export const Spinner: React.FC<SpinnerProps> = ({ size = 'md', color = 'violet' }) => {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  const colorStyles = {
    violet: 'border-neon-violet',
    cyan: 'border-neon-cyan',
    magenta: 'border-neon-magenta',
  };

  return (
    <div
      className={`
        ${sizeStyles[size]} border-2 border-dark-border rounded-full
        border-t-${colorStyles[color]} animate-spin
      `}
    />
  );
};

// ============= ALERT COMPONENT =============
interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const typeStyles = {
    success: 'bg-green-500/20 border-green-500/50 text-green-300',
    error: 'bg-red-500/20 border-red-500/50 text-red-300',
    info: 'bg-neon-cyan/20 border-neon-cyan/50 text-neon-cyan',
    warning: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300',
  };
  const typeIcons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  };

  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg border ${typeStyles[type]}`}>
      <span className="text-xl">{typeIcons[type]}</span>
      <p className="flex-1">{message}</p>
      {onClose && (
        <button onClick={onClose} className="text-lg hover:opacity-70">
          ✕
        </button>
      )}
    </div>
  );
};

// ============= DIVIDER COMPONENT =============
interface DividerProps {
  text?: string;
  variant?: 'default' | 'neon';
}

export const Divider: React.FC<DividerProps> = ({ text, variant = 'default' }) => {
  const variantStyles = {
    default: 'border-dark-border',
    neon: 'border-neon-violet/30',
  };

  if (text) {
    return (
      <div className="flex items-center gap-4 my-6">
        <div className={`flex-1 border-t ${variantStyles[variant]}`} />
        <span className="text-dark-text2 text-sm font-medium">{text}</span>
        <div className={`flex-1 border-t ${variantStyles[variant]}`} />
      </div>
    );
  }

  return <div className={`border-t ${variantStyles[variant]} my-6`} />;
};
