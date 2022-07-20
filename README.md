
#
说明: umi4中使用webAssembly报错问题复现demo, 调用wasm的代码在widget/pages/index line3，控制台报错 “Module not found: Error: No parser registered for webassembly/async”
# 环境配置

<!-- 安装 node、npm、tnpm 安装 learn npm install -g lerna -->

注意: Node 请使用 12+ 版本 (推荐 v16.13.0)

## Badges

[![Build status][build-status-image]][aone-ci-url]
[![Line coverage][line-coverage-image]][aone-ci-url]
[![Branch coverage][branch-coverage-image]][aone-ci-url]


[aone-ci-url]: https://aone-api.alibaba-inc.com/ak/testservice/api/badge/link?repo=https://github.com/deepdeepstudy/test-umi4-wasm.git
[build-status-image]: https://aone-api.alibaba-inc.com/ak/testservice/api/badge/query?repo=https://github.com/deepdeepstudy/test-umi4-wasm.git&type=%E6%9E%84%E5%BB%BA%E7%8A%B6%E6%80%81
[line-coverage-image]: https://aone-api.alibaba-inc.com/ak/testservice/api/badge/query?repo=https://github.com/deepdeepstudy/test-umi4-wasm.git&type=%E5%8D%95%E6%B5%8B%E8%A1%8C%E8%A6%86%E7%9B%96%E7%8E%87
[branch-coverage-image]: https://aone-api.alibaba-inc.com/ak/testservice/api/badge/query?repo=https://github.com/deepdeepstudy/test-umi4-wasm.git&type=%E5%8D%95%E6%B5%8B%E5%88%86%E6%94%AF%E8%A6%86%E7%9B%96%E7%8E%87

--------------------

## Quick Start 开发


先安装依赖/构建各个依赖包

```
tnpm run deps

```bash
cd packages/widget
tnpm run start



