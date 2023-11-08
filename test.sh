#!/bin/bash

_() {
  YEAR="2023"

  rm -rf README.md
  git add .
  GIT_AUTHOR_DATE="2023-11-08T18:00:00" \
    GIT_COMMITTER_DATE="2023-11-08T18:00:00" \
    git commit -m "new: 1656. Design an Ordered Stream"
  git push -u origin main -f
  echo "Cool, check your profile now: https://github.com/${USERNAME}"
} && _

unset -f _