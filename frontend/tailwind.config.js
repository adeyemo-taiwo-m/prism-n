/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["DM Mono", "monospace"],
        heading: ["Space Grotesk", "sans-serif"],
        body: ["IBM Plex Sans", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      colors: {
        void: "#04080F",
        navy: {
          DEFAULT: "#0A1628",
          mid: "#0F2040",
          light: "#163058",
        },
        border: {
          DEFAULT: "#1E3A5F",
          bright: "#2A4E7A",
        },
        text: {
          primary: "#E8F0FE",
          secondary: "#8BA4C0",
          muted: "#4A6080",
          dim: "#2A3D55",
        },
        informed: {
          DEFAULT: "#10B981",
          bg: "#052E1A",
          border: "rgba(16,185,129,0.35)",
        },
        uncertain: {
          DEFAULT: "#F59E0B",
          bg: "#291A02",
          border: "rgba(245,158,11,0.35)",
        },
        noise: {
          DEFAULT: "#EF4444",
          bg: "#2A0808",
          border: "rgba(239,68,68,0.35)",
        },
        prism: {
          violet: "#7C3AED",
          blue: "#2563EB",
          cyan: "#06B6D4",
          teal: "#10B981",
          amber: "#F59E0B",
        },
      },
      backgroundImage: {
        spectrum:
          "linear-gradient(135deg,#7C3AED 0%,#2563EB 22%,#06B6D4 48%,#10B981 74%,#F59E0B 100%)",
        page: "linear-gradient(160deg,#0A1628 0%,#04080F 60%)",
        card: "linear-gradient(135deg,#0F2040 0%,#0A1628 100%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.45),0 1px 4px rgba(0,0,0,0.3)",
        modal: "0 16px 64px rgba(0,0,0,0.6),0 4px 16px rgba(0,0,0,0.4)",
        "glow-informed": "0 0 24px rgba(16,185,129,0.28)",
        "glow-uncertain": "0 0 24px rgba(245,158,11,0.28)",
        "glow-noise": "0 0 24px rgba(239,68,68,0.28)",
        "glow-blue": "0 0 32px rgba(37,99,235,0.35)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseSlow: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        scanLine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        spectrumDrift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulseSlow 2.8s ease-in-out infinite",
        "scan-line": "scanLine 2.2s linear infinite",
        spectrum: "spectrumDrift 6s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
