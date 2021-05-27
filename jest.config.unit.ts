export default {
  displayName: {
    name: 'UNIT',
    color: 'blue',
  },
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsconfig: 'tsconfig.json',
    },
  },
  maxConcurrency: 1,
  verbose: true,
  globalSetup: './__test__/jest/global-setup.ts',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: './__test__/jest/custom-env.ts',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '/(src|__test__/unit)/.*\\.(spec|e2e)\\.(ts|tsx)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
