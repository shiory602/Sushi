# 課題

### 次は情報を保存するようにしてみましょう。

- 画面読み込み時の最初の処理で保存されていた情報を読み込み、一覧を再構築する
- 更新があるたびに情報を上書き保存する

この API が使えます。

- [文字列を保存](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- 保存  `window.localStorage.setItem('message', 'Hello World!')`
- 取得  `message = window.localStorage.getItem('message')`
- [オブジェクトと文字列を変換](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON])
- 文字列 ← オブジェクト  `json = JSON.stringify([{ name: "Alice", age: 12 }])`
- オブジェクト ← 文字列  `data = JSON.parse("[{ \"name\": \"Alice\", \"age\": 12 }]")`

DevTools のコンソールとかで試してみてください。
画面を再読み込みしても情報が保存されています。

```JS
KEY = 'super-cool-data';

// 保存
data = [{ name: "Alice", age: 12 }];

json = JSON.stringify(data);
window.localStorage.setItem(KEY, json);

// 取得
json = window.localStorage.getItem(KEY);
data = JSON.parse(json);
```
