import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Environment variables
const DEV_PORT = process.env.VITE_DEV_PORT || 3000
const DEV_HOST = process.env.VITE_DEV_HOST || 'localhost'
const ENABLE_AUTO_OPEN = process.env.VITE_ENABLE_AUTO_OPEN !== 'false'
const SSL_KEY_PATH = process.env.VITE_SSL_KEY_PATH || 'certs/localhost-key.pem'
const SSL_CERT_PATH = process.env.VITE_SSL_CERT_PATH || 'certs/localhost.pem'

// Check if certificates exist
const certsDir = path.resolve(__dirname, 'certs')
const keyPath = path.join(certsDir, SSL_KEY_PATH.split('/').pop())
const certPath = path.join(certsDir, SSL_CERT_PATH.split('/').pop())

const httpsConfig = fs.existsSync(keyPath) && fs.existsSync(certPath) ? {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath)
} : false

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(DEV_PORT),
    host: DEV_HOST,
    open: ENABLE_AUTO_OPEN,
    https: httpsConfig
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'node_modules']
  }
})
