import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/menu-sidebar/index.js',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'MenuSidebar'
  },
  plugins: [
    postcss({
      extensions: ['.css']
    }),
    commonjs(),
    vue(),
    terser()
  ]
}
