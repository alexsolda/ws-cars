import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts';


export default defineConfig({
  plugins: [react(), 
    dts({exclude: ["**/*.stories.ts", "**/*.test.ts"]})]
})
