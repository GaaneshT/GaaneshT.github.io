/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cyber-noir palette: deep navy base, neon-cyan accent, restrained.
        ink: {
          950: '#060814',
          900: '#0a0e1a',
          850: '#0d1220',
          800: '#0f1424',
          700: '#161b2e',
          600: '#1f2742',
          500: '#2a3454',
          400: '#3b4870'
        },
        ghost: {
          50:  '#f4f6fb',
          100: '#e6eaf5',
          200: '#c8d0e6',
          300: '#a3aec9',
          400: '#8b95b2',
          500: '#5a6485'
        },
        neon: {
          cyan: '#67e8f9',
          teal: '#5eead4',
          violet: '#c084fc',
          rose: '#fb7185',
          green: '#4ade80',
          amber: '#fbbf24'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
      },
      boxShadow: {
        'neon-cyan': '0 0 0 1px rgba(103, 232, 249, 0.25), 0 8px 32px -8px rgba(103, 232, 249, 0.45)',
        'neon-violet': '0 0 0 1px rgba(192, 132, 252, 0.25), 0 8px 32px -8px rgba(192, 132, 252, 0.45)',
        'inset-line': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.04)'
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        glow: {
          '0%, 100%': { opacity: '0.55', transform: 'translate3d(-12px,-6px,0) scale(1)' },
          '50%': { opacity: '0.85', transform: 'translate3d(18px,14px,0) scale(1.08)' }
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(120%)' }
        }
      },
      animation: {
        blink: 'blink 1.05s steps(1) infinite',
        scan: 'scan 7s linear infinite',
        glow: 'glow 24s ease-in-out infinite alternate',
        float: 'float 16s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite'
      }
    }
  },
  plugins: []
};
