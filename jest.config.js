
const config = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  testEnvironment:'node',
  globals: {
    'ts-jest': {
      isolatedModules:true
    }
  },
  testPathIgnorePatterns : [
      "<rootDir>/src/test/ignore"
    ]
};

export default config;