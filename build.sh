#!/usr/bin/env bash

project_path=$(cd `dirname $0`; pwd);

rm -rf $project_path/dist
mkdir $project_path/dist

echo '---------------------- begin build  ----------------------'
# tnpm run deps
tnpm run build
# echo $BUILD_GIT_COMMITID > $project_path/dist/version.txt
echo $BUILD_ARGV_STR | sed  's/.*--def_publish_changes=\(\S\+\).*/\1/g' > $project_path/dist/version.txt
echo '---------------------- build.sh BUILD_GIT_COMMITID ----------------------'
echo $BUILD_GIT_COMMITID
echo $BUILD_GIT_PROJECT
echo $BUILD_GIT_BRANCH
echo $BUILD_USER
echo $BUILD_ARGV_STR
echo '---------------------- end build ----------------------'