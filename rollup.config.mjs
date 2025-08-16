import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import sass from 'rollup-plugin-sass';

const config = [
  {
    input: 'krafty-tarot/src/frontend.ts',
    output: {
      file: 'krafty-tarot/build/frontend.js',
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      typescript(),
      terser(),
      sass({ output: true })
    ],
    preserveEntrySignatures: false
  },
  {
    input: 'krafty-tarot/src/admin.ts',
    output: {
      file: 'krafty-tarot/build/admin.js',
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      typescript(),
      terser(),
      sass({ output: true })
    ],
    preserveEntrySignatures: false
  }
];

export default config;
