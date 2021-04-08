KEY = 'super-cool-data';
const nameItem = document.querySelector('#name');
const ageItem = document.querySelector('#age');
const ascBtn = document.querySelector('#ascBtn');
const dscBtn = document.querySelector('#dscBtn');
const list = document.querySelector('#list');
const ul = document.createElement('ul');
let arr = new Array();
list.appendChild(ul);

addBtn.addEventListener('submit', e => {
    e.preventDefault();
    if (!nameItem.value || !ageItem.value) {
        alert('Please fill out the forms :D');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `
    <span id="list-name">${nameItem.value}</span>(<span id="list-age">${ageItem.value}</span>)`;
    ul.appendChild(li);

    li.querySelector('#list-name').addEventListener('click', editName)
    li.querySelector('#list-age').addEventListener('click', editAge);

    const obj = {
        key: ageItem.value,
        value: li,
    }
    arr.push(obj);

    // 保存
    data = [{
        name: nameItem.value,
        age: ageItem.value,
    }];
    json = JSON.stringify(data);
    window.localStorage.setItem(KEY, json);

    nameItem.value = '';
    ageItem.value = '';
});

////////////////////////////////////////////////////
// Sort data belong to the order
ascBtn.addEventListener('click', () => {
    arr.sort(sortAsc);
    arr.map(item => ul.appendChild(item.value));
});
const sortAsc = (a, b) => {
    return a.key - b.key;
}

dscBtn.addEventListener('click', () => {
    arr.sort(sortDsc);
    arr.map(item => ul.appendChild(item.value));
});
const sortDsc = (a, b) => {
    return b.key - a.key;
}
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Change data function
const editName = e => {
    const elName = e.currentTarget;
    const nameValue = prompt('Do you want to change your name?', elName.textContent);
    if (!nameValue) {
        return;
    }
    elName.innerHTML = nameValue;
}

const editAge = e => {
    const elAge = e.currentTarget;
    const ageValue = prompt('Do you want to change your age?', elAge.textContent);
    if (!ageValue || typeof (ageValue) !== 'number' || ageValue < 0) {
        return;
    }
    elAge.innerHTML = ageValue;
}
//////////////////////////////////////////////////

//////////////////////////////////////////////////


// 取得
json = window.localStorage.getItem(KEY);
data = JSON.parse(json);