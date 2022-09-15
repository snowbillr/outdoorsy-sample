const path = require("path");
const process = require("node:process");

const esbuild = require("esbuild");
const cssModulesPlugin = require("esbuild-css-modules-plugin");

esbuild.build({
  absWorkingDir: path.join(process.cwd(), "app/javascript"),
  entryPoints: ["application.jsx"],
  bundle: true,
  sourcemap: true,
  publicPath: "assets",
  loader: {
    ".png": "file",
  },
  outdir: path.join(process.cwd(), "app/assets/builds"),
  watch: process.argv.includes("--watch") ?? false,
  plugins: [cssModulesPlugin()],
});
