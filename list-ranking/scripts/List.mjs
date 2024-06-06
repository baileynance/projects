const listElement = document.getElementById("list");

export default class List {
    constructor(entry = "", rank = 1, entryList = [], objList = {}){
        this.entry = entry;
        this.rank = rank;
        this.entryList = entryList;
        this.objList = objList;
    }

    listTemplate(rank = this.rank, entry = "") {
        return `<li class="draggable" draggable="true">
            <button class="remove-item">-</button>
            <label for="${rank}">${rank}</label>
            <input id="${rank}" name="${rank}" placeholder="Enter list item">${entry}</input>
            <button class="add-item">+</button>
        </li>`;
    }

    createList() {
        this.clearListItems();
        const title = document.getElementById("list-name").value;
        const h2 = document.createElement("h2");
        h2.textContent = title;
        const listCont = document.querySelector("#list-creation");
        listCont.appendChild(h2);        
        this.addListItem();
    }

    addToEntryList() {

    }

    clearListItems() {
        const allItems = document.querySelectorAll("li");
        allItems.forEach(item => {
            item.remove();
        })
        const activeH2 = document.querySelectorAll("h2");
        activeH2.forEach(item => {
            item.remove();
        })
    }
    
    addListItem(itemEntry = "") {
        const li = document.createElement("li");
        li.innerHTML = this.listTemplate(this.rank, itemEntry);
        listElement.appendChild(li);
        this.rankUp();
        console.log(this.rank);
    }

    removeListItem(event) {
        const parentElement = event.target.parentElement;
        parentElement.remove();
    }

    rankUp() {
        this.rank++;
    }

    rankDown() {
        this.rank--;
    }

    reorderList() {
        array.forEach(itemEntry => {
            this.addListItem(itemEntry);
        })
    }

    getEntries() {
        return this.entryList;
    }

    updateEntries(entries) {
        this.entryList = entries;
    }
    
    getObject() {
        return this.objList;
    }

    updateObject(object) {
        this.objList = object;
    }
}