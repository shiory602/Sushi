# お題
入力された文字列をカンマ , で区切る ("a,b,c" → ["a", "b", "c"])  
<ul>, <li> で一覧表示する。空のものは空のまま出力してよい  
このとき前後の空白文字を削除する (" foo bar  " → "foo bar" )  

### 以下を使ってください。

- string.split(separator) --> Divides a `String` into an ordered list of substrings, and puts these substrings into an array. Returns the array  
- string.trim() --> Remove whitespace from both ends of a string.

The value is not changed after using `.trim()`.  
```JS
let str = " apple  ";
console.log(str.trim()); // " apple  "
```

You need to assign it to an variable.
```JS
let noSpace = str.trim();
console.log(noSpace); // "apple"
```


## How to create new element
```JS
let ul = document.createElement("ul");
```

## How to show the tooltip when you hover

Use the `document.title`.

```JS
li.title = li.textContent;
// where to put hover action / contents
```