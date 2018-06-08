#!/bin/bash
git fetch origin
git checkout development
git merge master --no-ff -m "chore(release): Merge master into development [skip ci]"
git push origin development
