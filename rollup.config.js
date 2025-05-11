import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "lib/index.esm.js",
      format: "esm",
    },
  ],
  external: ["react", "react-dom"], // Mark react and react-dom as external
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    del({ targets: ["lib/*"] }),
    postcss({
      minimize: true,
    }),
  ],
};
