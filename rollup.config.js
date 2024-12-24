import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // 入口文件
  output: [
    {
      file: 'dist/index.cjs', // 输出文件
      format: 'cjs',
      // 输出格式，可以是 esm, cjs, umd 等
    },

    {
      file: 'dist/index.mjs', // 输出文件
      format: 'es',
      // 输出格式，可以是 esm, cjs, umd 等
    },
  ],
  plugins: [
    resolve(), // 解析第三方模块
    commonjs(), // 将 CommonJS 模块转换为 ES6 模块
    typescript({
      tsconfig: './tsconfig.json', // 使用 tsconfig.json 配置
      useTsconfigDeclarationDir: true // 使用 tsconfig.json 中的 declarationDir
    }),
  ],
};