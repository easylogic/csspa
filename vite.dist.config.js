
import { defineConfig } from 'vite'
import path from 'path';
const localDir = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(localDir, 'src'),
      name: 'easylogic',
      fileName: (format) => `csspa.${format}.js`
    }
  }
})