#!/usr/bin/env sh

cd ../babel-babel
git add . && git stash && git stash drop
git reset HEAD —hard
git pull --rebase

Make build prepublish
node Makefile.js prepublish

cd ../babel
