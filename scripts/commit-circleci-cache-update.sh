#!/bin/bash
if [ -n "$(git status --porcelain .circleci/config.yml)" ]; then
  git add .circleci/config.yml
  git commit -m "chore: Update circleci cache config"
  echo "Push rejected. The CI cache configuration has been updated, please try the push again."
  exit 1;
fi
