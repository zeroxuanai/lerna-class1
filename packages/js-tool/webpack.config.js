const path = require("path");

const getPath = (dic) => {
  return path.resolve(__dirname, "./", dic);
};
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    path: getPath("dist"),
    filename: "index.js",
    library: {
      type: 'commonjs',
    },
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".js"],
    //   extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
  },
  experiments: {
    outputModule: true,
  },
};
