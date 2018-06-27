#!/bin/bash
git pull --ff-only origin "master:remotes/origin/master"
git checkout development
git merge master --no-ff -m "chore(release): Merge master into development [skip ci]"
git push origin development
