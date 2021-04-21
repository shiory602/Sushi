/**
 * @typedef {{ name: string }} Item
 */
const DATA_KEY = 'neko-mo-kawaii';
const elLoad = document.querySelector('#elLoad');
const elSave = document.querySelector('#elSave');
const elDelete = document.querySelector('#elDelete');
/** @type {HTMLFormElement} */
const nameItem = document.querySelector('#name');
const ageItem = document.querySelector('#age');
const loadBtn = document.querySelector('#elLoad')
const saveBtn = document.querySelector('#elSave')
const deleteBtn = document.querySelector('#elDelete')
const ascBtn = document.querySelector('#ascBtn');
const dscBtn = document.querySelector('#dscBtn');
const list = document.querySelector('#list');
/** @type {arr[]} */
let arr = new Array();
/** @type {item[]} */
let listItems = [];

main();

function main() {
    elSave.addEventListener('click', () => {
        save(listItems);
    });

    elLoad.addEventListener('click', () => {
        listItems = load();

        render();
    });

    elDelete.addEventListener('click', () => {
        deleteItems();
    });

    addBtn.addEventListener('submit', e => {
        e.preventDefault();

        if (!nameItem.value || !ageItem.value) {
            alert('Please fill out the forms :D');
            return;
        }
        const li = document.createElement('li');
        li.innerHTML = `
        <span id="list-name">${nameItem.value}</span>(<span id="list-age">${ageItem.value}</span>)`;
        list.appendChild(li);

        const listName = li.querySelector('#list-name');
        const listAge = li.querySelector('#list-age');

        listName.addEventListener('click', editName);
        listAge.addEventListener('click', editAge);

        const obj = {
            key: ageItem.value,
            value: li,
        }
        arr.push(obj);
        console.log(arr);


        listItems.push([nameItem.value, ageItem.value]);

        nameItem.value = '';
        ageItem.value = '';
    });
}

/**
 * Save,
 * @param {Item[]} data 
 */
function save(data) {
    const json = JSON.stringify(data); //文字列 ← オブジェクト
    window.localStorage.setItem(DATA_KEY, json); // 保存
}

/**
 * Load,
 * @returns {Item[]}
 */
function load() {
    const json = window.localStorage.getItem(DATA_KEY); // 取得
    const data = JSON.parse(json) || []; // オブジェクト ← 文字列
    return data;
}

/**
 * Delete,
 * @returns {null}
 */
function deleteItems() {
    // const json = window.localStorage.getItem(DATA_KEY); // 取得
    // const data = JSON.parse(json) || []; // オブジェクト ← 文字列
    if (localStorage.getItem('neko-mo-kawaii') === null) {
        alert('内容が保存されていません。');
        return false;
    }
    localStorage.removeItem('neko-mo-kawaii');
    alert('保存内容を削除しました。');
}

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
        console.log(arr);

        const listName = li.querySelector('#list-name');
        const listAge = li.querySelector('#list-age');

        listName.addEventListener('click', editName);
        listAge.addEventListener('click', editAge);
    });
}



////////////////////////////////////////////////////

////////////////////////////////////////////////////
// Sort data belong to the order
ascBtn.addEventListener('click', () => {
    arr.sort(sortAsc);
    console.log(arr);
    // list.innerHTML = '';
    arr.map(item => list.appendChild(item.value));
});
const sortAsc = (a, b) => {
    return a.key - b.key;
}

dscBtn.addEventListener('click', () => {
    arr.sort(sortDsc);
    console.log(arr);
    // list.innerHTML = '';
    arr.map(item => list.appendChild(item.value));
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
