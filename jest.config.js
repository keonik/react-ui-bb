module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['./test/setupTests.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', '.css'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  coverageReporters: ['text-summary'],
};
