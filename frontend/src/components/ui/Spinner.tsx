import React from 'react';

export function Spinner({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  const r = (size - 2) / 2;
  const circ = 2 * Math.PI * r;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="animate-spin"
      style={{ animationDuration: "0.75s", animationTimingFunction: "linear" }}
      aria-hidden="true"
    >
      {/* Track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.2"
      />
      {/* Arc */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray={`${circ * 0.25} ${circ * 0.75}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}
