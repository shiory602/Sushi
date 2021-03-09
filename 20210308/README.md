# Today's challenge
- 入力欄2つ「名前」「年齢」と「追加」ボタン
- 追加ボタンを押すと一覧 <ul> に追加される
- 一覧の表示は「名前 (年齢)」。例： "Alice (12)"
- 年齢部分は少し小さめの文字、薄めの色にする


## How to connect <label> and <input>

The `<label>` tag defines a label for several elements.

```HTML
<form>
	<label for="name">Name: </label>
	<input type="text" id="name"/>
	<label for="age">Age: </label>
	<input type="number" id="age"/>
	<input type="submit" value="Add" class="btn"/>
</form>
```

The attribute of `<label>` must be equal to the id attribute of the related element(this time, the related element is `<input>`) to bind them together.  
A label can also be bound to an element by placing the element inside the `<label>` element.