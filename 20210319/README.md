# 今回のお題

1. 前回同様リストを作る
2. 名前をクリックすると編集用小窓が開くようにする
3. 年齢も同様

## ヒント

- event.currentTarget.value を使う (例)[https://codepen.io/ginpei/pen/RwKoxgr]
- li 内の要素はそれぞれ作る

---

# Obtain the element of the target where the user manipulates. ~ 利用者が操作を行った対象の要素を得る

Get the element you want to specify.

```JS
let elName = li.querySelectorAll("#elName");
```

Using the forEach method to set an event for each element.

```JS
		elName.forEach(elName => {
			elName.addEventListener("click", nameFunction);
		});
```

Get the specified element and display it in the prompt input field.
This time, you can use `event.currentTarget`.

Make sure whether the prompt input field is empty or not.
Otherwise, it will be submitted as a blank field.

Finally, assign the data obtained by prompt to the element

```JS
/**
 *
 * @param {MouseEvent} e
 */
function nameFunction(e) {
	// eからクリックした要素を得る
	/** @type {HTMLElement} */
	const elName = e.currentTarget;
	let personsName = prompt("You can edit the name here!", elName.textContent);
	if (!personsName) {
		alert("Please type your name.");
		personsName = prompt("You can edit the name here!", elName.textContent);
	}
	elName.innerHTML = personsName;
}
```

### Chips

querySelector() は document だけじゃなくて要素からも利用可能。

```JS
li = document.createElement("li");
elName = li.querySelector('.nameItem');
elName.addEventListener();
```

# Display an alert when an input field is empty.

```JS
	let personsAge = prompt("You can edit the age here!", elAge.textContent);
	if (!personsAge) {
		alert("Please type your age.");
		personsAge = prompt("You can edit the age here!", elAge.textContent);
	}
```

Instruct to retype
Display `prompt()` again until to get variable

```JS
personsAge = prompt("You can edit the age here!", elAge.textContent);
```
