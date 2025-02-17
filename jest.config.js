module.exports = {
  "testEnvironment": "jsdom",
  verbose: true,
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  moduleNameMapper: {
    // Default NativeScript webpack aliases
    '~/(.*)$': '<rootDir>/app/$1',
    '@/(.*)$': '<rootDir>/app/$1',
    '^projectRoot/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  transformIgnorePatterns: [],
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.{js,vue}',
  ],
  coverageReporters: ['text-summary', 'html'],
};