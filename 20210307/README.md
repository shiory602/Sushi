# How to set "submit" button

1. Create `id` into the `form` tag.
2. Use `<input type="submit">` or `<button></button>` for the button.
3. Get the element id and put it into a variable.
4. Set addEventListener. The event type should be `submit`.

```HTML
<form id="submit">
	<label>
		<p>Enter a comma-separated string of characters.</p>
		<input type="text" id="textInput"/>
	</label>
	<input type="submit" value="submit"/>
</form>
```

In this case, I needed to delete all list-items.
That's why I use `event.PreventDefault()` at first.

```JS
let submit = document.getElementById("submit");

submit.addEventListener("submit", (evt) => {
	event.preventDefault(); //フォーム送信を停止
	if (textInput.value) {
		ul.innerHTML = "";
		let listItem = textInput.value.split(",");
		for (let i = 0; i < listItem.length; i++) {
			let li = document.createElement("li");
			li.textContent = listItem[i].trim();
			li.title = li.textContent;
			ul.appendChild(li);
		}
		textInput.value = "";
	} else {
		error.innerHTML = "Please write a strings :)";
		setTimeout(() => {
			error.innerHTML = "";
		}, 2000);
	}
})
```