import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    // 自动引入APi
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
      eslintrc: {
        enabled: true,
        globalsPropValue: true
      }
    }),
    // 自动引入组件
    Components({
      dirs: ['src/components']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    /** 消除打包大小超过 500kb 警告 */
    chunkSizeWarningLimit: 2000,
    /** Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效 */
    minify: 'terser',
    /** 在打包代码时移除 console.log、debugger 和 注释 */
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      },
      format: {
        /** 删除注释 */
        comments: true
      }
    },
    // 关闭文件计算
    reportCompressedSize: false,
    // 关闭生成map文件 可以达到缩小打包体积
    sourcemap: false,
    /** 打包后静态资源目录 */
    assetsDir: 'static',
    // 打包输出配置
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
