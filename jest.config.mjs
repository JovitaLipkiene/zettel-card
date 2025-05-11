export default {
  preset: "ts-jest", // Use ts-jest preset
  testEnvironment: "jest-environment-jsdom", // Explicitly specify the jsdom environment
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transform TypeScript and JSX files
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"], // Extend Jest with Testing Library matchers
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Include all TypeScript files
    "!src/index.ts", // Exclude index.ts from coverage
  ],
  coverageDirectory: "coverage", // Output directory for coverage reports
  coverageReporters: ["text", "lcov"], // Formats for coverage reports
};
