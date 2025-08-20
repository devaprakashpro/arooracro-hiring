/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-charcoal': '#0D0D0D',
        'metallic-gray': '#141414',
        'silver': '#C0C0C0',
        'neon-blue': '#00C6FF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)',
        'neon-gradient': 'linear-gradient(135deg, #00C6FF 0%, #0099CC 100%)',
        'dark-gradient': 'linear-gradient(135deg, #050505 0%, #0D0D0D 50%, #050505 100%)',
        'subtle-metallic': 'linear-gradient(135deg, #0A0A0A 0%, #141414 25%, #0A0A0A 50%, #141414 75%, #0A0A0A 100%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 198, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 198, 255, 0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
