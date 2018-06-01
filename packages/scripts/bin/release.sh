#!/bin/bash
if hig-scripts-is-stable-package ; then
  hig-scripts-ensure-initial-tag && semantic-release
else
  echo "Skipping release."
fi
