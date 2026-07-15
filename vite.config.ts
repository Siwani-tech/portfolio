import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: "base" must match your GitHub repo name exactly, wrapped in slashes.
// e.g. if your repo is github.com/yourname/siwani-portfolio, keep it as below.
// If you rename the repo, update this to match, or assets will 404 on the live site.
export default defineConfig({
  plugins: [react()],
  base: '/siwani-portfolio/',
})
