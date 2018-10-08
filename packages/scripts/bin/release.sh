#!/bin/bash
if hig-scripts-is-stable-package ; then
  semantic-release
else
  echo "Skipping release."
fi
