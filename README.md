# Sushi
This is my record of JavaScript challenge from .

# Git

## How to Propose changes to your work with pull requests

# Make a new branch
```Git
git checkout -b 20210305 origin/main
```

- `20210305` --> branch name
- `origin/main` --> default branch name

Make sure to do `git push` after making a new branch.
```Git
git push -u origin 20210305
```

# Check all branches in both remote and local.
```Git
git branch --all
```

# Delete branch after taking data to local from remote.
```Git
git fetch --prune
```
- `fetch`: Get the data from remote.
- `--prune`: Delete the data.

Before submit `git fetch --prune`, you can see all branches you made.
```Git
* 20210304
main
remotes/origin/main
remotes/origin/20210304
```
However `20210304` in remote disappear after submitting `git fetch --prune`.
```Git
* 20210304
main
remotes/origin/main
```

# Attach the completed branch to the main branch.
```Git
git rebase
```
The arrangement is to attach the working branch to the branch source (master, etc.), so the commits are recorded in order.