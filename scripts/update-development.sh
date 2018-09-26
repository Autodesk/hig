#!/bin/bash
# This script assumes `origin` points to the canonical repository
# ---
# Ensure `master` branch is up-to-date
git checkout master
git pull --ff-only origin "master:remotes/origin/master"
# Ensure `development` branch is up-to-date
git checkout development
git pull --ff-only origin "development:remotes/origin/development"
# Create a commit that merges changes from `master` into `development` and skips the CI workflow
# CI is skipped, because changes should have only been made to changelogs and local package versions during CI
git merge master --no-ff -m "chore(release): Merge master into development [skip ci]"
# Finally, update the `development` branch on the canonical repository
git push origin development
