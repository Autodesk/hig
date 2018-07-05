#!/bin/bash
FILE="$PWD/.archives/builds.tgz"
if [ -f $FILE ]; then
  echo "Extracting builds..."
  tar -zxf $FILE 2>/dev/null
  echo "Builds extracted from $FILE."
else
  echo "No builds archive found."
fi
