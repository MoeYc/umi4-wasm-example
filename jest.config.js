module.exports = {
  resetMocks: false,
  setupFiles: ["jest-canvas-mock"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // transform: {
  //   '^.+\\.ts?$': 'ts-jest',
  // },
  // transformIgnorePatterns: ['<rootDir>/node_modules/'],
  // 依赖映射
  moduleNameMapper: {
    "^@/(.*)": [
      "<rootDir>/packages/widget/src/$1",
    ],
    "@alife/iot-maliang-(.*)": "<rootDir>/packages/$1/src/",
    canvas: "jest-canvas-mock",
  },
  maxWorkers:"50%",
  // 忽略非必要文件
  modulePathIgnorePatterns: [
    // 编辑器依赖
    "<rootDir>/packages/widget/src/component/datasource/component/editor/jsonlint.js",
  ],
};
