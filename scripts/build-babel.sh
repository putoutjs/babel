#!/usr/bin/env node

cd ../babel-babel
git reset HEAD~ —hard
git tag -d tmp.v8.0.0-beta.3
git pull

putout --no-config Makefile.source.mjs -t 'if (name === "babel-eslint-plugin") __body -> if (name === "babel-eslint-plugin" && babel8Condition) __body' --f none
Make build prepublish
node Makefile.source.mjs new-babel-8-version-create-commit-ci

cd ../babel
