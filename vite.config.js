import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
<<<<<<< HEAD
  theme: {
=======
  theme:{
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
    extend: {},
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
<<<<<<< HEAD
  build: {
    // ✅ Split vendor chunks — browser caches React/Firebase separately
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'firebase-vendor': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'icons': ['lucide-react'],
        },
      },
    },
    // ✅ Smaller chunks load faster
    chunkSizeWarningLimit: 600,
  },

  // ✅ Faster dev server — pre-bundle heavy deps
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'lucide-react',
    ],
  },
=======
>>>>>>> a804c7db11d813328e4793d69d89d01794980851
})
