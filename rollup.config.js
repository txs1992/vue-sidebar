import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/menu-sidebar/index.js',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'MenuSidebar'
  },
  plugins: [commonjs(), vue()]
}
