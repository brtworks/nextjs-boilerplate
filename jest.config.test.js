const jestConfig = require('./jest.config.js');

// filepath: /Users/beratkorkmaz/Applications/nextjs-boilerplate/jest.config.test.js

describe('Jest Configuration', () => {
  test('should have node as test environment', () => {
    expect(jestConfig.testEnvironment).toBe('node');
  });

  test('should include ts, js, json, and node in module file extensions', () => {
    expect(jestConfig.moduleFileExtensions).toEqual(
      expect.arrayContaining(['ts', 'js', 'json', 'node'])
    );
  });

  test('should match test files in __tests__ directories with .test.ts or .test.js extensions', () => {
    expect(jestConfig.testMatch).toEqual(
      expect.arrayContaining(['**/__tests__/**/*.test.(ts|js)'])
    );
  });
});