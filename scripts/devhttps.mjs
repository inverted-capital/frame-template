import { spawn } from 'child_process'

const child = spawn(
  process.platform === 'win32' ? 'npx.cmd' : 'npx',
  ['vite'],
  {
    stdio: 'inherit',
    env: { ...process.env, USE_MKCERT: '1' }
  }
)
child.on('exit', (code) => process.exit(code ?? 0))
