module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: ["**/src/**/*.spec.[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};
