import React from 'react';

export function PrismLogo({ size = 32, showWordmark = true, className = "" }: { size?: number, showWordmark?: boolean, className?: string }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* ── ICON MARK ─────────────────────────── */}
      <svg
        width={size * 0.857}
        height={size}
        viewBox="0 0 30 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-beam" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#C8D8F0" stopOpacity="0.5" />
          </linearGradient>

          <linearGradient id="lg-face" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F2040" />
            <stop offset="100%" stopColor="#0A1628" />
          </linearGradient>

          <radialGradient id="lg-inner" cx="55%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#1E3A5F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0A1628" stopOpacity="0" />
          </radialGradient>
        </defs>

        <polygon
          points="15,2 28,32 2,32"
          fill="url(#lg-face)"
          stroke="#1E3A5F"
          strokeWidth="0.75"
          strokeLinejoin="round"
        />
        <polygon points="15,2 28,32 2,32" fill="url(#lg-inner)" />

        <line
          x1="15"
          y1="2.5"
          x2="2.5"
          y2="31.5"
          stroke="url(#lg-beam)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <line x1="15" y1="2.5" x2="28" y2="32" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round" opacity="0.95" />
        <line x1="15" y1="2.5" x2="26" y2="32" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" opacity="0.9" />
        <line x1="15" y1="2.5" x2="23.5" y2="32" stroke="#06B6D4" strokeWidth="1.3" strokeLinecap="round" opacity="0.9" />
        <line x1="15" y1="2.5" x2="21" y2="32" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
        <line x1="15" y1="2.5" x2="18.5" y2="32" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />

        <line
          x1="2.5"
          y1="32"
          x2="28"
          y2="32"
          stroke="#1E3A5F"
          strokeWidth="0.75"
          strokeLinecap="round"
        />
      </svg>

      {/* ── WORDMARK ──────────────────────────── */}
      {showWordmark && (
        <span
          className="font-mono font-bold text-text-primary tracking-[0.18em] uppercase leading-none mt-1"
          style={{ fontSize: `${size * 0.5}px` }}
        >
          PRISM
        </span>
      )}
    </div>
  );
}
