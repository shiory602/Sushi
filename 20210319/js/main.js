let names = document.getElementById("name");
let age = document.getElementById("age");
let ascBtn = document.getElementById("ascBtn");
let descBtn = document.getElementById("descBtn");
let listItem = document.getElementById("list-item");

let ul = document.createElement("ul");
listItem.appendChild(ul);
let arr = new Array();

addList.addEventListener("submit", (e) => {
	e.preventDefault();
	if (!names.value || !age.value) {
		alert("Please fill out both forms :)");
		return;
	}
	let li = document.createElement("li");
	li.innerHTML = `<p id="elName">${names.value}</p>(<span id="elAge"')">${age.value}</span>)`;
	ul.appendChild(li);


	let elName = li.querySelectorAll("#elName");
	let elAge = li.querySelector("#elAge");
	elName.forEach(elName => {
		elName.addEventListener("click", nameFunction);
	});

	// console.log(typeof elAge);
	// console.log(elAge.value);
	// console.log(elAge.valueAsNumber);

	elAge.forEach(elAge => {
		elAge.addEventListener("click", ageFunction);
	})

	let obj = {
		key: age.value,
		value: li,
	}
	arr.push(obj);

	names.value = "";
	age.value = "";
});

// Add event ///////////////////////////////////////////
ascBtn.addEventListener("click", () => {
	arr.sort(sortAsc);
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		ul.appendChild(arr[i].value);
	}
});

let sortAsc = (a, b) => {
	return a.key - b.key;
}

descBtn.addEventListener("click", () => {
	arr.sort(sortDesc);
	for (let i = 0; i < arr.length; i++) {
		ul.appendChild(arr[i].value);
	}
})

let sortDesc = (a, b) => {
	return b.key - a.key;
}
////////////////////////////////////////////////////////


/**
 * 
 * @param {MouseEvent} e 
 */
function nameFunction(e) {
	// eからクリックした要素を得る
	/** @type {HTMLElement} */
	const elName = e.currentTarget;
	let personsName = prompt("You can edit the name here!", elName.textContent);
	if (!personsName) {
		return;
	}
	elName.innerHTML = personsName;
}

function ageFunction(e) {
	let elAge = e.currentTarget;
	let personsAge = prompt("You can edit the age here!", elAge.textContent);
	if (!personsAge) {
		return;
	}
	elAge.innerHTML = personsAge;
}
//////////////////////////////////////////////////////////////