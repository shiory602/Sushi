# 本日の課題

- 前回と同様に名前と年齢を入力、一覧表示
- 自動で年齢昇順ソート (1→2→3)

# Sort method

JS の`arr.sort()`は必ず比較関数(comparator)を与えること。

```js
// Don't 👎
arr = [1, 2, 3, 11, 22, 111];
arr.sort();
// [1, 11, 111, 2, 22, 3]

// Do 👍
arr = [1, 2, 3, 11, 22, 111];
arr.sort((v, u) => v - u);
// [1, 2, 3, 11, 22, 111]

arr = ["û", "ú", "ù", "ü"];
arr.sort((v, u) => v.localeCompare(u));
// ["ú", "ù", "û", "ü"]
```

## Caution!!

Use `arr.sort((v, u) => v - u);` is for `Number`.

- 123 -> Number

```JS
1 + 1 // 2
```

- '123' -> String

```JS
'1' + '1' // '11'
```

If you want to sort `String`, use `arr.sort((v, u) => v.localeCompare(u));`

# ボタンを押すと昇順・降順に並び替え

```js
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

// "key"プロパティで降順ソートする関数
let sortDesc = (a, b) => {
  return b.key.localeCompare(a.key);
};
// "key"プロパティで昇順ソートする関数
let sortAsc = (a, b) => {
  return a.key.localeCompare(b.key);
};
```
