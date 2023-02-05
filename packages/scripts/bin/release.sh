#!/bin/bash
if weave-scripts-is-stable-package ; then
  semantic-release
else
  echo "Skipping release."
fi
