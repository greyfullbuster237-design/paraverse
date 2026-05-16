import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neon Cyber Colors
        neon: {
          violet: '#B000FF',
          magenta: '#FF00FF',
          cyan: '#00FFFF',
          pink: '#FF0080',
          lime: '#00FF00',
          blue: '#0080FF',
          purple: '#8B00FF',
        },
        // Dark Theme
        dark: {
          bg: '#0A0E27',
          surface: '#1A1F3A',
          surface2: '#242B48',
          border: '#2A3155',
          text: '#E0E6FF',
          text2: '#A8B2D1',
        },
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #B000FF 0%, #FF00FF 50%, #00FFFF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)',
      },
      boxShadow: {
        'neon-sm': '0 0 4px rgba(176, 0, 255, 0.5)',
        'neon-md': '0 0 12px rgba(176, 0, 255, 0.6)',
        'neon-lg': '0 0 24px rgba(176, 0, 255, 0.7)',
        'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.6)',
        'neon-magenta': '0 0 20px rgba(255, 0, 255, 0.6)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        cyber: ['Orbitron', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 3s linear infinite',
        'glitch': 'glitch 0.2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 10px rgba(176, 0, 255, 0.5)' },
          '50%': { textShadow: '0 0 20px rgba(255, 0, 255, 0.8)' },
        },
        'scan': {
          '0%': { boxShadow: 'inset 0 0 0 2px rgba(0, 255, 255, 0)' },
          '50%': { boxShadow: 'inset 0 0 10px 2px rgba(0, 255, 255, 0.6)' },
          '100%': { boxShadow: 'inset 0 0 0 2px rgba(0, 255, 255, 0)' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(-2px, 2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        '.text-glow': {
          textShadow: '0 0 10px rgba(176, 0, 255, 0.6), 0 0 20px rgba(255, 0, 255, 0.4)',
        },
        '.text-glow-cyan': {
          textShadow: '0 0 10px rgba(0, 255, 255, 0.6), 0 0 20px rgba(0, 255, 255, 0.3)',
        },
        '.border-neon': {
          borderColor: 'rgba(176, 0, 255, 0.5)',
          boxShadow: '0 0 10px rgba(176, 0, 255, 0.3)',
        },
      });
    },
  ],
};

export default config;
