import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const certsDir = path.resolve(__dirname, '../certs')
const keyDest = path.join(certsDir, 'localhost-key.pem')
const certDest = path.join(certsDir, 'localhost.pem')

// Create certs directory if it doesn't exist
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true })
}

try {
  // Always run mkcert in certsDir
  process.chdir(certsDir)
  console.log('Generating SSL certificates with mkcert...')
  execSync('mkcert localhost 127.0.0.1 ::1', { stdio: 'inherit' })

  // Find the generated files (e.g., localhost+2-key.pem, localhost+2.pem)
  const files = fs.readdirSync(certsDir)
  const keyFile = files.find(f => f.endsWith('-key.pem'))
  const certFile = files.find(f => f.endsWith('.pem') && !f.endsWith('-key.pem'))

  if (keyFile && certFile) {
    fs.renameSync(path.join(certsDir, keyFile), keyDest)
    fs.renameSync(path.join(certsDir, certFile), certDest)
    console.log('SSL certificates generated and renamed successfully!')
  } else {
    throw new Error('mkcert did not generate expected files.')
  }
} catch (error) {
  console.error('Failed to generate certificates with mkcert.')
  console.error(error.message)
  process.exit(1)
} 