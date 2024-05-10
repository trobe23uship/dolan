// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],  // Indicates where Jest should look for your test files
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',  // Regex pattern to find test files
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
  };
  