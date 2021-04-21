# 課題

### 次は情報を保存するようにしてみましょう。

- 画面読み込み時の最初の処理で保存されていた情報を読み込み、一覧を再構築する
- 更新があるたびに情報を上書き保存する

この API が使えます。

- [文字列を保存](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- 保存  `window.localStorage.setItem('message', 'Hello World!')`
- 取得  `message = window.localStorage.getItem('message')`
- [オブジェクトと文字列を変換](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
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


## How to load/save/delete data in localStorage.
（LocalStorageとは、利用者が使用しているブラウザにデータを保存させる機能）


### Save, load, and delete

- Define the name of the local storage
```JS
/**
 * @typedef {{ name: string }} Item
 */
const DATA_KEY = 'neko-mo-kawaii';
const elLoad = document.querySelector('#elLoad');
const elSave = document.querySelector('#elSave');
const elDelete = document.querySelector('#elDelete');
```

- Use `setItem()` for saving data
```JS
/**
 * Save,
 * @param {Item[]} data 
 */
function save(data) {
    const json = JSON.stringify(data); //文字列 ← オブジェクト
    window.localStorage.setItem(DATA_KEY, json); // 保存
}
```

- Use `getItem()` for getting data(load)
```JS
/**
 * Load,
 * @returns {Item[]}
 */
function load() {
    const json = window.localStorage.getItem(DATA_KEY); // 取得
    const data = JSON.parse(json) || []; // オブジェクト ← 文字列
    return data;
}
```

-  Use `removeItem()` for deleting data
You can delete all data in localStorage with using `clear()`
```JS
/**
 * Delete,
 * @returns {null}
 */
function deleteItems() {
    if (localStorage.getItem('neko-mo-kawaii') === null) {
        alert('内容が保存されていません。');
        return false;
    }
    localStorage.removeItem('neko-mo-kawaii');
    alert('保存内容を削除しました。');

}
```


This time, I wanted to use `sort()` so I need to recreate array data.

```JS
/**
 * 画面更新
 */
function render() {
    // 全削除
    list.innerHTML = '';
    arr = [];
    // 一覧項目を作成
    listItems.forEach((item) => {
        const li = document.createElement("li");

        li.innerHTML = `
        <span id="list-name">${item[0]}</span>(<span id="list-age">${item[1]}</span>)
        `;

        list.append(li);

        const obj = {
            key: item[1],
            value: li,
        }
        arr.push(obj);
    

        const listName = li.querySelector('#list-name');
        const listAge = li.querySelector('#list-age');

        listName.addEventListener('click', editName);
        listAge.addEventListener('click', editAge);
    });
}
```



### tips!

Only `string` can be saved in localStorage.
It means if you want to save object data like array, you need to convert data to string.
e.g.
```JS
// Save array data
var exArray = ['apple', 'orange', 'grape'];
localStorage.setItem('aryMemo', JSON.stringify(exArray));

// Load array data
var exArray = JSON.parse(localStorage.getItem('aryMemo'));
```
In the case there is no data in localStorage, check if there is data before loading.
```JS
var array = [];
if(localStorage.getItem('aryMemo') !== null){
    array = JSON.parse( localStorage.getItem('aryMemo') );
}
```


### Check the data in localStorage

1. Right-click and select "Inspection (I)"
2. Select the "Application" tab.
3. Select "Local Storage" under "Storage
4. Select the URL you want to check.
5. Select the saved key you want to check.