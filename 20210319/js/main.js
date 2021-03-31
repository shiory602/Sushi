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
	li.innerHTML = `<p id="nameItem">${names.value}</p>(<span id="ageItem"')">${age.value}</span>)`;
	ul.appendChild(li);


	let nameItem = document.querySelectorAll("#nameItem");
	let ageItem = document.querySelectorAll("#ageItem");
	if (nameItem) {
		nameItem.forEach(elName => {
			elName.addEventListener("click", nameFunction);
		});

		ageItem.forEach(elAge => {
			elAge.addEventListener("click", ageFunction);
		})

		let obj = {
			key: age.value,
			value: li,
		}
		arr.push(obj);

		names.value = "";
		age.value = "";
	}
});

// Add event ///////////////////////////////////////////
ascBtn.addEventListener("click", () => {
	arr.sort(sortAsc);
	for (let i = 0; i < arr.length; i++) {
		ul.appendChild(arr[i].value);
	}
});
////////////////////////////////////////////////////////

// Sort event //////////////////////////////////////////
let sortAsc = (a, b) => {
	return a.key.localeCompare(b.key);
}

descBtn.addEventListener("click", () => {
	arr.sort(sortDesc);
	for (let i = 0; i < arr.length; i++) {
		ul.appendChild(arr[i].value);
	}
})

let sortDesc = (a, b) => {
	return b.key.localeCompare(a.key);
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
	if (elName != null) {
		elName.innerHTML = personsName;
	}
}

function ageFunction(e) {
	let elAge = e.currentTarget;
	let personsAge = prompt("You can edit the age here!", elAge.textContent);
	if (personsAge != null) {
		elAge.innerHTML = personsAge;
	}
}
//////////////////////////////////////////////////////////////