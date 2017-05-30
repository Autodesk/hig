#!/bin/bash

npm run build > /dev/null 2>&1
npm run compile-gh > /dev/null 2>&1

CLEAN_STATUS=`git status --porcelain`

if [ "$CLEAN_STATUS" == "" ] ; then
    exit 0
else

    echo "        "
    echo "        Generated files differed from what is checked in."
    echo "        You may need to re-run 'build' and/or 'compile-gh' npm scripts."
    echo "        Differing files:"
    echo "        ---------------------------------"
    echo "        "
    git status --porcelain
    echo "        ---------------------------------"
    echo "        "
    echo "        Please regenerate and commit the necessary files."
    echo "        "
    exit 1
fi