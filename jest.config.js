const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

module.exports = createJestConfig({
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '@/(.*)$': './src/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
});
