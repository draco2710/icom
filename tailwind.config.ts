import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./features/**/*.{js,ts,jsx,tsx,mdx}",
        "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                "can-hover": { raw: "(hover: hover)" },
            },
            colors: {
                primary: "var(--primary, #007AFF)",
                "primary-blue": "#007AFF",
                "background-light": "#FAFAFA",
                "background-dark": "#000000",
                "card-light": "#ffffff",
                "card-dark": "#1c1c1e",
                "text-primary-light": "#111827",
                "text-primary-dark": "#f2f2f7",
                "text-secondary-light": "#6B7280",
                "text-secondary-dark": "#8e8e93",
                "accent-orange": "#ff9500",
            },
            fontFamily: {
                display: ["var(--font-manrope)", "Manrope", "sans-serif"],
            },
            boxShadow: {
                soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
            },
            animation: {
                fadeIn: "fadeIn 1s ease-in-out",
            },
        },
    },
    plugins: [],
};
export default config;
