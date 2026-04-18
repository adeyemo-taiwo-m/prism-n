import React from 'react';
import { Spinner } from './Spinner';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'danger' | 'outline' | 'spectrum';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPos?: 'left' | 'right';
  loadingText?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPos = 'left',
  loadingText,
  onClick,
  children,
  className = '',
  type = 'button',
  ...rest
}: ButtonProps) {
  const base = [
    "relative inline-flex items-center justify-center gap-2",
    "font-body font-medium rounded-lg",
    "transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
    "select-none",
  ];

  const variants = {
    primary: [
      "bg-prism-blue text-white",
      "hover:bg-blue-500 focus-visible:ring-prism-blue",
      "active:scale-[0.98]",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "shadow-glow-blue/0 hover:shadow-glow-blue",
    ],
    ghost: [
      "bg-transparent text-text-secondary",
      "border border-border",
      "hover:border-border-bright hover:text-text-primary",
      "focus-visible:ring-border-bright",
      "active:scale-[0.98]",
    ],
    danger: [
      "bg-noise text-white",
      "hover:bg-red-600 focus-visible:ring-noise",
      "active:scale-[0.98]",
    ],
    outline: [
      "bg-transparent text-prism-blue",
      "border border-prism-blue/50",
      "hover:bg-prism-blue/10 hover:border-prism-blue",
      "focus-visible:ring-prism-blue",
    ],
    spectrum: [
      "text-white font-semibold",
      "bg-spectrum bg-[length:200%_200%] animate-spectrum",
      "hover:opacity-90 focus-visible:ring-prism-cyan",
      "active:scale-[0.98]",
    ],
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs min-h-[32px]",
    md: "px-4 py-2.5 text-sm min-h-[40px]",
    lg: "px-6 py-3 text-base min-h-[48px]",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {loading ? (
        <>
          <Spinner
            size={size === "sm" ? 13 : size === "lg" ? 18 : 15}
            color="currentColor"
          />
          {loadingText && <span>{loadingText}</span>}
          {!loadingText && children}
        </>
      ) : (
        <>
          {icon && iconPos === "left" && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          {children}
          {icon && iconPos === "right" && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
}
