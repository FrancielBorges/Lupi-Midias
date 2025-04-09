import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { splitVendorChunkPlugin } from 'vite'
import { compression } from 'vite-plugin-compression2'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-transform-remove-console', { exclude: ['error', 'warn'] }]
        ]
      }
    }),
    splitVendorChunkPlugin(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 65,
      },
      pngquant: {
        quality: [0.7, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
          {
            name: 'collapseGroups',
            active: true,
          },
          {
            name: 'removeUselessStrokeAndFill',
            active: true,
          },
        ],
      },
      webp: {
        quality: 70,
        method: 6,
      },
    }),
    compression({
      algorithm: 'gzip',
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 1024,
      deleteOriginalAssets: false,
    }),
    compression({
      algorithm: 'brotliCompress',
      exclude: [/\.(br)$/, /\.(gz)$/],
      threshold: 1024,
      compressionOptions: {
        params: {
          [0]: 11
        }
      },
      deleteOriginalAssets: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: './', // Configuração para GitHub Pages
  build: {
    target: 'es2015',
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'motion-vendor';
            }
            if (id.includes('recharts')) {
              return 'charts-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            return 'vendor';
          }
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    write: true,
    emptyOutDir: true,
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    hmr: {
      overlay: true,
    },
  },
})
