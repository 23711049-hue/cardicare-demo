import type { Config } from "tailwindcss";

const config: Config = {
  // Matikan dark mode otomatis biar gak gelap-gelapan
  darkMode: 'class', 
  
  content: [
    // Kita panggil SEMUA kemungkinan folder biar gak ada yang lolos
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;