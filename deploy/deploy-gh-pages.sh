#!/bin/bash -x
# ideas used from https://gist.github.com/motemen/8595451

# abort the script if there is a non-zero error
set -e

pwd

remote=$(git config remote.origin.url)
git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
git config --global user.name "$GH_NAME" > /dev/null 2>&1
git init
git checkout gh-pages

# rebuild index pages
cat > docs/index.html <<EOF
<!DOCTYPE html>
<html>
  <head><title>HIG Example pages </title>
  <body>
    <h1>HIG Example pages</h1>
  </body>
</html>
EOF

# stage any changes and new files
git add docs/*

# now commit, ignoring branch gh-pages doesn't seem to work, so trying skip
git commit --allow-empty -m "Automated deploy to GitHub pages [ci skip]"
# and push, but send any output to /dev/null to hide anything sensitive
git push --force origin gh-pages

echo "Finished Deployment!"
