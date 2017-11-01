#!/bin/bash

# Get current branch (https://stackoverflow.com/questions/1593051/how-to-programmatically-determine-the-current-checked-out-git-branch)
branch_name=$(git symbolic-ref -q HEAD)
branch_name=${branch_name##refs/heads/}
branch_name=${branch_name:-HEAD}

echo "deploying with current branch: $branch_name"

# Deploy server is hidden behind VPN, so no problem to expose path
curl -H "Content-Type: application/json" -X POST "http://10.40.178.10:8080/job/hig/buildWithParameters?token=y43KplNvGh&BRANCH=${branch_name}"