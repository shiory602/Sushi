# 本日の課題

- 前回と同様に名前と年齢を入力、一覧表示
- 自動で年齢昇順ソート (1→2→3)

# Sort method

```js
let arr = [1, 3, 6, 5, 4, 7, 2];
arr.sort();
// [1,2,3,4,5,6,7]
```

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
