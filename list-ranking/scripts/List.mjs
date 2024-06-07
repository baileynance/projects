const listElement = document.getElementById("list");

export default class List {
    constructor(objList = {}, entry = "", rank = 1, entryList = [], title = null){
        this.objList = objList;
        this.entry = entry;
        this.rank = rank;
        this.entryList = entryList;
        this.title = title;
    }

    listTemplate(rank = this.rank, entry = "") {
        return `<li class="draggable" draggable="true">
            <button class="remove-item">-</button>
            <label for="${rank}">${rank}</label>
            <input id="${rank}" name="${rank}" value="${entry}" placeholder="Enter item here"></input>
            <button class="add-item">+</button>
        </li>`;
    }

    createList() {
        this.clearListItems();
        this.clearTitle();
        this.entry = "Enter item here";
        this.rank = 1;
        this.title = null;
        this.entryList = [];
        this.objList = {};   
        this.addTitle();   
        this.addListItem();
    }

    getTitle() {
        return this.title;
    }

    addTitle() {
        const h2 = document.createElement("h2");
        const listCont = document.querySelector("#list-creation");
        if (this.title == null) {
            const title = document.getElementById("list-name").value;
            h2.textContent = title;
            listCont.appendChild(h2); 

            localStorage.setItem("title", JSON.stringify(title));
        } else {
            h2.textContent = this.title;
            listCont.appendChild(h2);
        }
    }

    setTitle(title) {
        const json = JSON.parse(title);
        this.title = json;
    }

    clearListItems() {
        const allItems = document.querySelectorAll("li");
        allItems.forEach(item => {
            item.remove();
        })
    }

    clearTitle() {
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

    resetRank() {
        this.rank = 1;
    }

    rankUp() {
        this.rank++;
    }

    rankDown() {
        this.rank--;
    }

    reorderList() {
        this.clearListItems();
        this.addTitle();
        this.entryList.forEach(itemEntry => {
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

    convertObjToArray(obj) {
        const json = JSON.parse(obj);
        this.objList = json; 
        this.entryList = Object.values(json);
    }
}