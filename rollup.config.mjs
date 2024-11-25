// import { defineConfig } from 'rollup';
// import resolve from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';
// import alias from '@rollup/plugin-alias';
// import postcss from 'rollup-plugin-postcss';
// import svg from 'rollup-plugin-svg';
// import path from 'path';

// export default defineConfig({
//   input: 'src/index.ts', // Основной файл вашего проекта
//   output: [
//     {
//       file: 'dist/bundle.cjs.js',
//       format: 'cjs', // CommonJS формат
//       sourcemap: true,
//     },
//     {
//       file: 'dist/bundle.esm.js',
//       format: 'esm', // ESModules формат
//       sourcemap: true,
//     },
//   ],
//   plugins: [
//     postcss({
//       extract: true, // Это извлечет CSS в отдельный файл
//       minimize: true, // Опционально: если хотите минифицировать CSS
//     }),
//     resolve(), // Позволяет импортировать модули из node_modules
//     commonjs(), // Преобразует CommonJS модули в ESModules
//     typescript({ tsconfig: './tsconfig.json' }), // Использует ваш tsconfig.json
//     svg(),
//     alias({
//       entries: [
//         {
//           find: '@components',
//           replacement: path.resolve('src/components'),
//         },
//         { find: '@assets', replacement: path.resolve('src/assets') },
//       ],
//     }),
//   ],
// });
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from '@rollup/plugin-alias';
import postcss from 'rollup-plugin-postcss';
import svg from 'rollup-plugin-svg';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default defineConfig({
  input: 'src/index.ts', // Основной файл вашего проекта
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs', // CommonJS формат
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm', // ESModules формат
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Автоматически исключает peerDependencies из бандла
    resolve(), // Позволяет импортировать модули из node_modules
    commonjs(), // Преобразует CommonJS модули в ESModules
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true, // Убедитесь, что декларации TypeScript создаются в правильной директории
    }),
    postcss({
      extract: true, // Это извлечет CSS в отдельный файл
      minimize: true, // Опционально: если хотите минифицировать CSS
    }),
    svg(),
    alias({
      entries: [
        {
          find: '@components',
          replacement: path.resolve('src/components'),
        },
        { find: '@assets', replacement: path.resolve('src/assets') },
      ],
    }),
  ],
  external: ['react', 'react-dom'], // Убедитесь, что React не включается в бандл
});
