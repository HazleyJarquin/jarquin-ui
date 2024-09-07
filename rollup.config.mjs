import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: !isProduction,
    },
    {
      file: "dist/index.esm.js",
      format: "es",
      sourcemap: !isProduction,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
      sourceMap: !isProduction,
      inlineSources: !isProduction,
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
  ],
  external: ["react", "react-native", "native-base"],
};
