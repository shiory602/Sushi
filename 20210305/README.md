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

