/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./Entities/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // ✨ Paleta Vitral Bizantina - Tema Principal
        'stained-glass': '#0F1B3C',      // Azul noturno profundo
        'medieval-gold': '#FFD700',      // Dourado luminoso
        'medieval-red': '#DC143C',       // Vermelho carmesim brilhante
        'medieval-blue': '#1E40AF',      // Azul real intenso
        'medieval-green': '#059669',     // Verde esmeralda
        'medieval-purple': '#7C3AED',    // Roxo ametista
        'medieval-cream': '#F5F5DC',     // Bege claro
        'medieval-white': '#FFFFFF',     // Branco puro radiante
        'medieval-black': '#0F0F23',     // Azul-preto profundo
        
        // 🌈 Paleta Vitral - Cores Luminosas
        'vitrail-amber': '#FBBF24',      // Âmbar luminoso
        'vitrail-emerald': '#10B981',    // Esmeralda brilhante
        'vitrail-ruby': '#EF4444',       // Rubi radiante
        'vitrail-sapphire': '#3B82F6',   // Safira intensa
        'vitrail-amethyst': '#8B5CF6',   // Ametista luminosa
        'vitrail-topaz': '#F59E0B',      // Topázio dourado
        
        // 🎨 Cores Bege com Cruzes
        'beige-light': '#F5F5DC',        // Bege claro
        'beige-medium': '#F0E68C',       // Bege médio
        'beige-dark': '#DEB887',         // Bege escuro
        'beige-accent': '#D2B48C',       // Bege acento
        'beige-border': '#A0522D',       // Marrom bege para bordas
        
        // 🎨 Cores de Estado e Interação
        'hover': '#FBBF24',
        'active': '#F59E0B',
        'disabled': '#64748B',
        'border': '#FFD700',
        'shadow': 'rgba(15, 27, 60, 0.3)',
        'text-primary': '#F8FAFC',       // Texto claro principal
        'text-secondary': '#E2E8F0',     // Texto claro secundário
        'text-accent': '#FFD700',        // Texto dourado
        'text-light': '#FFFFFF',         // Texto branco puro
        
        // Gradientes vitral bizantinos
        'gradient-primary': 'linear-gradient(135deg, #0F1B3C 0%, #1E40AF 50%, #7C3AED 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%)',
        'gradient-accent': 'linear-gradient(135deg, #EF4444 0%, #FBBF24 50%, #FFD700 100%)',
        'gradient-bege': 'linear-gradient(135deg, #F5F5DC 0%, #F0E68C 50%, #DEB887 100%)',
      },
      fontFamily: {
        'medieval': ['Cinzel', 'Times New Roman', 'serif'],
        'scripture': ['Crimson Text', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'medieval': '0 8px 32px rgba(15, 27, 60, 0.4)',
        'medieval-gold': '0 4px 20px rgba(255, 215, 0, 0.3)',
        'medieval-red': '0 6px 20px rgba(220, 20, 60, 0.4)',
        'vitral-glow': '0 0 20px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 215, 0, 0.2)',
        'vitral-intense': '0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)',
      },
      backgroundImage: {
        'medieval-primary': 'linear-gradient(135deg, #0F1B3C 0%, #1E40AF 50%, #7C3AED 100%)',
        'medieval-secondary': 'linear-gradient(135deg, #10B981 0%, #3B82F6 50%, #8B5CF6 100%)',
        'medieval-accent': 'linear-gradient(135deg, #EF4444 0%, #FBBF24 50%, #FFD700 100%)',
        'vitrail': 'linear-gradient(45deg, #FBBF24 0%, #10B981 20%, #EF4444 40%, #3B82F6 60%, #8B5CF6 80%, #F59E0B 100%)',
        'vitral-dark': 'linear-gradient(135deg, rgba(15, 27, 60, 0.95) 0%, rgba(30, 64, 175, 0.9) 100%)',
        'bege-crosses': 'linear-gradient(135deg, #F5F5DC 0%, #F0E68C 50%, #DEB887 100%)',
      },
      animation: {
        'vitral-glow': 'vitral-glow 4s ease-in-out infinite',
        'vitral-pulse': 'vitral-pulse 3s ease-in-out infinite',
        'vitrail-shift': 'vitrail-shift 10s ease-in-out infinite',
      },
      keyframes: {
        'vitral-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 215, 0, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 215, 0, 0.3)',
          },
        },
        'vitral-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.02)',
            filter: 'brightness(1.1)',
          },
        },
        'vitrail-shift': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '33%': {
            backgroundPosition: '100% 0%',
          },
          '66%': {
            backgroundPosition: '0% 100%',
          },
        },
      },
    },
  },
  plugins: [],
}
