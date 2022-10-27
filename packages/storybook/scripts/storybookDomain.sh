#!/bin/bash
# Using the branch name
# 1. Remove all characters that are not alphanumeric, hyphens, periods, or forward slashes
# 2. Replace forward slashes and periods with hyphens
# 3. Translate characters to lowercase
storybookSubDomainSuffix() {
  echo $CIRCLE_BRANCH | awk '{ gsub(/[^a-zA-Z0-9-.\/]/, ""); gsub(/[\/.]/, "-"); $0=tolower($0); print }'
}

echo "weave-$(storybookSubDomainSuffix).surge.sh"
