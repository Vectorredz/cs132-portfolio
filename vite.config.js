import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	base: '/cs132-portfolio/',
	plugins: [
    react(),
    tailwindcss(),
  ],
	build: {
		rollupOptions: {
		input: {
			main: resolve(__dirname, 'index.html'),
				},
			},
		},
	}
)