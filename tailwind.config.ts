import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Couleurs Maison Royale du Ndop
                indigo: {
                    DEFAULT: '#1E2A44',
                    50: '#E8EBF1',
                    100: '#D1D7E3',
                    200: '#A3AFC7',
                    300: '#7587AB',
                    400: '#475F8F',
                    500: '#1E2A44',
                    600: '#182237',
                    700: '#121929',
                    800: '#0C111C',
                    900: '#06080E',
                },
                gold: {
                    DEFAULT: '#C8A24D',
                    50: '#F9F5EC',
                    100: '#F3EBD9',
                    200: '#E7D7B3',
                    300: '#DBC38D',
                    400: '#CFAF67',
                    500: '#C8A24D',
                    600: '#A0823E',
                    700: '#78622E',
                    800: '#50411F',
                    900: '#28210F',
                },
                ivory: {
                    DEFAULT: '#F5F1E8',
                    50: '#FFFFFF',
                    100: '#FEFDFB',
                    200: '#F5F1E8',
                    300: '#EBE3D0',
                    400: '#E1D5B8',
                    500: '#D7C7A0',
                    600: '#CDB988',
                    700: '#C3AB70',
                    800: '#B99D58',
                    900: '#9A8347',
                },
                noir: {
                    DEFAULT: '#111111',
                    50: '#E5E5E5',
                    100: '#CCCCCC',
                    200: '#999999',
                    300: '#666666',
                    400: '#333333',
                    500: '#111111',
                    600: '#0E0E0E',
                    700: '#0A0A0A',
                    800: '#070707',
                    900: '#030303',
                },
                // shadcn/ui mapping
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                playfair: ['var(--font-playfair)', 'serif'],
                poppins: ['var(--font-poppins)', 'sans-serif'],
            },
            backgroundImage: {
                'ndop-pattern': "url('/images/ndop-pattern.svg')",
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'fade-up': 'fadeUp 0.6s ease-in-out',
                'slide-in': 'slideIn 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
