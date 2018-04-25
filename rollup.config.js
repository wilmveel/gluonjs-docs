import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default  {
        input: './node_modules/js-beautify/js/index.js',
        output: {
          file: 'src/JsBeautify.js',
          format: 'es'
        },
        plugins: [
          nodeResolve(),
          commonjs()
        ]
      }
