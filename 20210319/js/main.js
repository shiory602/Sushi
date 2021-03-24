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
	li.innerHTML = `<p id="nameItem" onclick="nameFunction('${names.value}')">${names.value}</p>(<span id="ageItem" onclick="ageFunction('${age.value}')">${age.value}</span>)`;
	ul.appendChild(li);

	let obj = {
		key: age.value,
		value: li,
	}
	arr.push(obj);

	names.value = "";
	age.value = "";
})


// Add event ///////////////////////////////////////////
ascBtn.addEventListener("click", () => {
	arr.sort(sortAsc);
	for (let i = 0; i < arr.length; i++) {
		ul.appendChild(arr[i].value);
	}
})
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

// edit event /////////////////////////////////////////
function nameFunction(e) {
	let personName = prompt("You can edit the name here!", e);
	if (personName != null) {
    document.getElementById("nameItem").innerText = personName;
  }
}

function ageFunction(e) {
	let personAge = prompt("You can edit the age here!", e);
	if (personAge != null) {
    document.getElementById("ageItem").innerText = personAge;
  }
}
//////////////////////////////////////////////////////////////