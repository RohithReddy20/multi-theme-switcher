/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'serif': ['Merriweather', 'serif'],
                'playful': ['Pacifico', 'cursive'],
            },
            colors: {
                // Theme 1 - Minimalist
                theme1: {
                    bg: '#ffffff',
                    surface: '#f8fafc',
                    primary: '#3b82f6',
                    secondary: '#64748b',
                    text: '#1e293b',
                    accent: '#06b6d4',
                },
                // Theme 2 - Dark
                theme2: {
                    bg: '#0f172a',
                    surface: '#1e293b',
                    primary: '#f59e0b',
                    secondary: '#6b7280',
                    text: '#f1f5f9',
                    accent: '#10b981',
                },
                // Theme 3 - Colorful
                theme3: {
                    bg: '#fef3c7',
                    surface: '#fff7ed',
                    primary: '#e11d48',
                    secondary: '#8b5cf6',
                    text: '#7c2d12',
                    accent: '#059669',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-in': 'slideIn 0.3s ease-out',
                'scale-in': 'scaleIn 0.2s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
