# 21 - Git and GitHub for Beginners

## 1. Difference

- Git is local version-control software.
- GitHub hosts Git repositories and adds collaboration, Actions, issues, pull requests, and Pages.

## 2. Three-state mental model

~~~text
Working tree --git add--> Staging area --git commit--> Local history
     ^                                               |
     |                                               v
 Edit files                                     git push
                                                     |
                                                     v
                                              GitHub remote
~~~

The official Git book describes files as modified, staged, and committed.

## 3. Essential commands

~~~bash
git status --short
git diff
git add path/to/file
git diff --staged
git commit -m "Explain the verified change"
git log --oneline
git push
~~~

Always inspect before staging and inspect staged content before committing.

## 4. Tracked and untracked

- Tracked files are known to Git.
- Modified files differ from the last committed snapshot.
- Staged files are selected for the next commit.
- Untracked files exist in the working tree but are not yet tracked.

An empty folder is not tracked, which is why .gitkeep is sometimes used as a convention.

## 5. Branches

A branch is a movable name pointing to a commit. Branches isolate work for review.

~~~text
main:       A---B---------E
                 \       /
feature:          C---D
~~~

A merge combines histories. A conflict means Git cannot safely choose between overlapping changes; a human must resolve it.

## 6. Pull requests

A pull request proposes merging a branch. It supports:

- Diff review.
- Discussion.
- Automated checks.
- Approval.
- Traceable merge.

It is a GitHub collaboration concept, not a core Git command.

## 7. .gitignore

.gitignore tells Git which untracked paths should normally remain untracked, such as generated reports or local caches. It does not remove a file already committed.

## 8. Safe recovery

Before undoing:

1. Inspect status.
2. Identify exact target.
3. Decide whether work is committed.
4. Prefer a new reversing commit for shared history.
5. Avoid destructive reset or checkout commands unless their effects are fully understood.

## 9. Codex collaboration

Ask Codex to:

- Inspect status first.
- Preserve unrelated changes.
- Use focused patches.
- Show files changed.
- Run diff checks.
- Avoid committing or pushing unless authorized.

## 10. Project workflow

~~~text
Requirement -> edit -> local QA -> review diff -> stage selected files
 -> commit -> push/PR -> checks -> merge -> Pages deployment
~~~

## 11. Sanity check and source

Terminology follows the official [Pro Git explanation](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git) and [recording-changes guide](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository). Commands shown are non-destructive unless the user deliberately stages, commits, or pushes.

