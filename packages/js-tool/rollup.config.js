import  path from "path"

// 外部依赖
import resolve from '@rollup/plugin-node-resolve';
// rollup.config.js
export default {
    input: './src/index.js',
    output: {
        dir:path.resolve(__dirname,"dist"),
    //   file: 'dist/bundle.js',
      format: 'es'
    },
    plugins: [resolve()]
  };