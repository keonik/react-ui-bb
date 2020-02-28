import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { uglify } from 'rollup-plugin-uglify';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

import packageJSON from './package.json';
const input = './src/index.ts';
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, '.min.js');

console.log(__dirname);

export default [
    // CommonJS
    {
        input,
        output: {
            file: minifyExtension(packageJSON.main),
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            postcss({
                extract: true,
            }),
            typescript({ module: 'CommonJS' }),
            babel({
                exclude: 'node_modules/**',
            }),
            external(),
            resolve(),
            commonjs({ extensions: ['.js', '.ts'] }), // the ".ts" extension is required
            uglify(),
        ],
    },
    {
        input,
        output: {
            file: minifyExtension(packageJSON.main),
            format: 'cjs',
            sourcemap: true,
        },
        plugins: [
            postcss({
                extract: true,
            }),
            typescript({ module: 'CommonJS' }),
            babel({
                exclude: 'node_modules/**',
            }),
            external(),
            resolve(),
            commonjs({ extensions: ['.js', '.ts'] }), // the ".ts" extension is required            uglify(),
        ],
    },
    // UMD
    {
        input,
        output: {
            file: packageJSON.browser,
            format: 'umd',
            sourcemap: true,
            name: 'react-ui-bb',
            globals: {
                react: 'React',
                '@emotion/styled': 'styled',
                '@emotion/core': 'core',
            },
        },
        plugins: [
            postcss({
                extract: true,
            }),
            babel({
                exclude: 'node_modules/**',
            }),
            external(),
            resolve(),
            commonjs(),
            typescript(),
        ],
    },
    {
        input,
        output: {
            file: minifyExtension(packageJSON.browser),
            format: 'umd',
            sourcemap: true,
            name: 'react-ui-bb',
            globals: {
                react: 'React',
                '@emotion/styled': 'styled',
                '@emotion/core': 'core',
            },
        },
        plugins: [
            postcss({
                extract: true,
            }),
            babel({
                exclude: 'node_modules/**',
            }),
            external(),
            resolve(),
            commonjs(),
            terser(),
            typescript(),
        ],
    },
    // ES
    {
        input,
        output: {
            file: packageJSON.module,
            format: 'es',
            sourcemap: true,
            exports: 'named',
        },
        plugins: [
            postcss({
                extract: true,
            }),
            babel({
                exclude: 'node_modules/**',
            }),
            external(),
            resolve(),
            commonjs(),
            typescript(),
        ],
    },
    {
        input,
        output: {
            file: minifyExtension(packageJSON.module),
            format: 'es',
            souremap: true,
            exports: 'named',
        },
        plugins: [
            postcss({
                extract: true,
            }),
            babel({
                exclude: 'node_modules/**',
            }),
            external(),
            resolve(),
            commonjs(),
            terser(),
            typescript(),
        ],
    },
];
