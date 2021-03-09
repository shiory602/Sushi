# Today's challenge
- 入力欄2つ「名前」「年齢」と「追加」ボタン
- 追加ボタンを押すと一覧`<ul>`に追加される
- 一覧の表示は「名前 (年齢)」。例： "Alice (12)"
- 年齢部分は少し小さめの文字、薄めの色にする

## ’Submit button' tag

There are three types of button tags, and usually you should use `<button>` tag for submit button.

- `<input type="button"/>`
- `<input type="submit"/>`
- `<button></button>`

### "button"
The reason why you should use a `<button>` for the submit button is that a `<button>` allows you to use pseudo elements, which gives you more freedom in CSS design.  
If you add a class, you can share the same design and movement as the `<a>` tag link button.

### "type=submit"
`<button>` and `<input type=submit>` are almost same. But there is a big difference between them.
- input ... There is a limit to how much design and movement can be added.
- button ... can use pseudo-elements (:before,:after), so it is easy to add design and movement.

### "type=button"

The `type="button"` in the `<input>` tag does not have the submit function.
You can also use the `<button>` tag for buttons that do not submit, so it is almost never used.




## How to connect `<label>` and `<input>`

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