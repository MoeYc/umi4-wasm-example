module.exports = {
  verbose: true,
  // testEnvironment: 'jsdom',
  // setupFiles: ['./test/setup.js'],
  // setupFilesAfterEnv: ['./test/setupAfterEnv.ts'],
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'md'],
  // modulePathIgnorePatterns: ['/_site/'],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  maxWorkers: 5,
  // transform: {
  //   "^.+\\.[j|t]sx?$": "babel-jest"
  // },
};
