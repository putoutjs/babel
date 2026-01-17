#!/usr/bin/env sh

cd ../babel-babel
git add . && git stash && git stash drop
git reset HEAD~ —hard
git tag -d tmp.v8.0.0-beta.3
git pull --rebase

Make build prepublish
node Makefile.source.mjs prepublish

cd ../babel
