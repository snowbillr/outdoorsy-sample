module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  overrides: [
    {
      files: ["app/javascript/**/*.test.js", "app/javascript/**/*.test.jsx"],
      plugins: ["jest", "jest-dom"],
      extends: ["plugin:jest/recommended", "plugin:jest-dom/recommended"],
    },
  ],
  rules: {},
  ignorePatterns: [
    ".eslintrc.js",
    "build.js",
    "jest.config.js",
    "babel.config.js",
  ],
};
