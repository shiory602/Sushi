# How to set "Click event" with error message :)

## Use If Statement and check whether text is being entered or not.

First, get each element Ids to use.
After that, use addEventListener type: submit and put an argument for `.preventDefault()`. if there is no argument, this would be `window.event`.

```JS
const form = document.getElementById("form"); // form button
const text = document.getElementById("text"); // input text
const msg = document.getElementById("msg"); // where the error msg shows up

form.addEventListener("submit", (event) => {
	if (text.value) {
		console.log(`Form Submitted! Your message is "${text.value}" :)`);
	} else {
		msg.innerHTML = "Write a message please :)";
	}
	event.preventDefault();
	setTimeout(() => {
		msg.innerHTML = "";
	}, 2000);
});
```



# Git

## How to Propose changes to your work with pull requests

# Make a new branch
```Git
git checkout -b 20210305 origin/main
```
`20210305` --> branch name  
`origin/main` --> default branch name  
Make sure to do `git push -u origin master` after making a new branch.

# Check all branches in both remote and local.
```Git
git branch --all
```

# Delete branch after taking data to local from remote.
```Git
git fetch --prune
```

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