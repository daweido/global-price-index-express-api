export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/**/__tests__/**/*.test.ts"],
  coverageDirectory: "./coverage",
  globals: { "ts-jest": { diagnostics: false } },
  transform: {},
};
