# How to set "Click event"

## addEventListener

```JS
HTMLelement.addEventListener("type", ()=>{
	...
});
```

### I get the id from HTML button tag this time.

```JS
let btn = document.getElementById("btn");

btn.addEventListener("click", ()=> {
	console.log("hello");
});
```


# How to create a button

## :active
1. Change background color
2. Set box-shadow and set only vertical axis.
3. Use the :active pseudo selector to reset box-shadow, and move the button 3px above.

```CSS
#btn {
	background-color: lightgray;
	box-shadow: 0px 3px gray;
}
#btn:active {
	box-shadow: none;
	position: relative;
	top: 3px;
}
```