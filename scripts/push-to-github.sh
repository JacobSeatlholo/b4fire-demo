#!/bin/bash
# Push B4Fire demo to GitHub over the sandbox's JS SSH transport.
# Prerequisite: the public key below must be added to GitHub → Settings → SSH keys
set -e
cd /home/z/my-project
export GIT_SSH_COMMAND="bun /home/z/git-ssh/git-ssh2.mjs"
echo "Pushing main -> git@github.com:JacobSeatlholo/b4fire-demo.git"
git push -u origin main "$@"
