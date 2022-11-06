module.exports = {
  roots: ['<rootDir>'],
  resetMocks: true,
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom',

  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  collectCoverage: false,
  coverageThreshold: null,
  coverageReporters: ['json', 'html'],
  collectCoverageFrom: ['**/src/**/*.{js,ts,jsx,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  coveragePathIgnorePatterns: [],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.[jt]sx?$',
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
