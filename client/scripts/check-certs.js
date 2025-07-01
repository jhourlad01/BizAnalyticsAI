import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const certsDir = path.resolve(__dirname, '../certs')
const keyPath = path.join(certsDir, 'localhost-key.pem')
const certPath = path.join(certsDir, 'localhost.pem')

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.log('SSL certificates not found. Generating...')
  execSync('node scripts/generate-certs.js', { stdio: 'inherit' })
} else {
  console.log('SSL certificates found.')
} 