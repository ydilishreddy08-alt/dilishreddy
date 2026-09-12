/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        scope: {
          black: '#050805',
          'black-light': '#0a0f0a',
          'dark-green': '#0B2E13',
          'mid-green': '#0d3a1a',
          green: '#39FF14',
          emerald: '#00C853',
          lime: '#A7FF00',
          'green-dim': '#1a5c2e',
          'green-glow': '#39FF1433',
          'green-soft': '#2BFF77',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-rev': 'floatRev 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-rev': 'spin-rev 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'scan': 'scan 4s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-right': 'slide-right 0.8s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'ripple': 'ripple 0.6s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'streak': 'streak 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(20px) rotate(-5deg)' },
        },
        'spin-rev': {
          'from': { transform: 'rotate(360deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.4)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        streak: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw)', opacity: '0' },
        },
      },
      boxShadow: {
        'green-glow': '0 0 20px rgba(57, 255, 20, 0.3), 0 0 40px rgba(57, 255, 20, 0.15)',
        'green-glow-lg': '0 0 40px rgba(57, 255, 20, 0.5), 0 0 80px rgba(57, 255, 20, 0.2)',
        'green-glow-sm': '0 0 10px rgba(57, 255, 20, 0.4)',
        'emerald-glow': '0 0 20px rgba(0, 200, 83, 0.3)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
