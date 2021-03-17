# 本日の課題
- 前回と同様に名前と年齢を入力、一覧表示
- 年齢昇順ソート (1→2→3)

## How to use Sort method.

First, I create a same event listener as 20210308 folder.

```JS
add.addEventListener("submit", ()=> {
			event.preventDefault();
			if (name.value && age.value) {
				let li = document.createElement("li");
				let ageSpan = document.getElementsByTagName("span");
				li.innerHTML = `${name.value}(<span>${age.value}</span>)`;
				ul.appendChild(li);
				for (let i = 0; i < ageSpan.length; i++) {
					console.log(ageSpan[i].innerHTML);
						ageSpan[i].innerHTML.sort();
				}
				name.value = "";
				age.value = "";
			} else {
				alert("Please enter both forms :)");
			}
		})
```