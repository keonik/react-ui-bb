const { defaults } = require('jest-config');

console.log('jest setupTests bitch!');

module.exports = {
    verbose: true,
    setupFilesAfterEnv: ['./src/setupTests.ts'],
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
};
