import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


module.exports = {
  // 配置开发服务器
  server: {
    // 监听所有网卡地址
    host: '0.0.0.0',
    // 设置开发服务器端口号
    port: 3000
  },
  // 配置构建输出目录和静态资源路径
  build: {
    outDir: 'dist',
    assetsDir: 'static'
  }
};
