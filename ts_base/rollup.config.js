import ts from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// esModule规范中没有__dirname __filename
// import.meta.url  === 当前文件的路径 file://
const __filename = fileURLToPath(import.meta.url); // fileURLToPath：把当前文件路径转化为绝对路径
const __dirname = dirname(__filename); // 当前文件的所在的文件目录夹  dirname获取当前文件的文件目录

console.log(resolve(__dirname, 'public/index.html'), '111');

export default {
  input: resolve(__dirname, 'src/index.ts'),
  output: {
    format: 'iife', // 生成立即执行函数
    file: resolve(__dirname, 'dist/bundle.js'),
    sourcemap: true, // 源码调试的功能
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts'],
    }),
    ts({
      tsconfig: resolve(__dirname, 'tsconfig.json'),
    }),
    serve({
      port: 3000,
      // open: true,
      openPage: resolve(__dirname, '/public/index.html'),
    }),
  ],
};
