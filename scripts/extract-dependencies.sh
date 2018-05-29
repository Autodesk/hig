#!/bin/bash
FILE="$PWD/.archives/dependencies.tgz"
if [ -f $FILE ]; then
  echo "Extracting dependencies..."
  tar -zxf $FILE 2>/dev/null
  echo "Dependencies extracted from $FILE."
else
  echo "No dependencies archive found."
fi
