#!/bin/bash
# This script assumes `origin` points to the canonical repository
# ---
# Ensure `master` branch is up-to-date
git checkout master
git pull --ff-only origin "master:remotes/origin/master"
# Force dependents of `@hig/theme-data` to use its latest version
npx upgrade-dependents --force --packageDir packages/theme-data
# If changes were made
if [[ `git status --porcelain ./packages` ]]; then
  git add ./packages
  git commit -m "chore(release): upgrade packages to latest version of `@hig/theme-data` [skip ci]"
  git push origin master
fi
