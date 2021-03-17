# 本日の課題
- 前回と同様に名前と年齢を入力、一覧表示
- 年齢昇順ソート (1→2→3)

## How to use Sort method.

This time, I need to get all age data from existing lists, sort it all, and return it.
First, I create a same event listener as 20210308 folder.

```JS
add.addEventListener("submit", ()=> {
		event.preventDefault();
	if (!name.value || !age.value) {
		alert("Please enter both forms :)");
		return;
	}
	let li = document.createElement("li");
	let ageSpan = document.getElementsByTagName("span");
	li.innerHTML = `${name.value}(<span>${age.value}</span>)`;
	ul.appendChild(li);

	name.value = "";
	age.value = "";
})
```

Then, create an array outside of the event.

```JS
let arr = new Array();
```

In the addEventListener section, I create an object before clear the data of `age.value`.
The object has `age.value` as key, and `li` as value.
Then, I put this object into the array I just created.
This is what I can get all age data as the array from existing lists.

```JS
let obj = {
	key: age.value,
	value: li,
};
arr.push(obj);
```


Then, I made two buttons for sorting by ascending/descending order.

```html
<div class="order-btn">
	<button id="ascBtn">昇順ソート</button>
	<button id="descBtn">降順ソート</button>
</div>
```

after that, get ids from both.

```JS
let descBtn = document.getElementById("descBtn");
let ascBtn = document.getElementById("ascBtn");
```

Create event listeners for buttons.
Call `sortDesc`/`sortAsc` function in `sort()` for sorting the array(list data).
After that, append each array values to `ul`.

```JS
descBtn.addEventListener("click", () => {
	arr.sort(sortDesc);
	for (let i = 0; i < arr.length; i++) {
		ul.appendChild(arr[i].value);
	}
});

ascBtn.addEventListener("click", () => {
	arr.sort(sortAsc);
	for (let i = 0; i < arr.length; i++) {
		ul.appendChild(arr[i].value);
	}
});
```

### Use localeCompare method

> referenceStr.localeCompare(compareString[, locales[, options]])
[Wikipedia](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

1. Create a function and put two parameters(`a, b`).
2. compare `a` with `b`(or `b` with `a`).
3. return the result.

```JS
// "key"プロパティで降順ソートする関数
let sortDesc = (a, b) => {
	return b.key.localeCompare(a.key);
}
// "key"プロパティで昇順ソートする関数
let sortAsc = (a, b) => {
	return a.key.localeCompare(b.key);
}
```