#!/usr/bin/env sh

cd ../babel-babel
git reset HEAD~ —hard
git tag -d tmp.v8.0.0-beta.3
git pull --rebase

~/putout/packages/putout/bin/putout.js --no-config Makefile.source.mjs -t 'if (name === "babel-eslint-plugin") __body -> if (name === "babel-eslint-plugin" && babel8Condition) __body' --f none --fix && echo '✅ 'Makefile.source' fixed'
Make build prepublish
node Makefile.source.mjs new-babel-8-version-create-commit-ci

cd ../babel
