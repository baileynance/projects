import List from "./List.mjs";
import Drag from "./Drag.mjs";
import User from "./User.mjs";

const refreshList = localStorage.getItem("list");
const refreshTitle = localStorage.getItem("title");

const list = new List(refreshList);
const drag = new Drag();
const user = new User();

if (refreshList == null) {
    console.log("hello, world!");
} else {
    list.convertObjToArray(refreshList);
    list.convertTitle(refreshTitle);
    list.reorderList();
}

const create = document.getElementById("create");
const clear = document.getElementById("clear");
const save = document.getElementById("save");
const load = document.getElementById("load");
const deleteButton = document.getElementById("delete");
const ul = document.querySelector("ul");
const buttons = document.querySelectorAll("button:not(.remove-item, .add-item)");

buttons.forEach(element => {
    element.addEventListener("click", (event) => {
    user.runSaveAnimation(event);
    })
})

// Events handled by elements loaded upon DOM creation

create.addEventListener("click", () => {
    list.createList();
});

clear.addEventListener("click", () => {
    list.clearListItems();
    list.clearTitle();
});

deleteButton.addEventListener("click", () => {
    const title = list.getTitle();
    user.deleteList(title);
    list.clearListItems();
    list.clearTitle();
})

save.addEventListener("click", () => {
    const title = list.getTitle();
    const obj = list.getObject();
    user.saveList(title, obj);
})

load.addEventListener("click", () => {
    const title = document.getElementById("list-load").value;
    const li = user.loadList(title);
    const array = Object.values(li);
    list.setTitle(title);
    list.updateEntries(array);
    list.reorderList();
})

// Event delegation for all dynamically created lists

ul.addEventListener("click", (event) => {
    if (event.target.className == "add-item") {
        list.addListItem();
    } else if (event.target.className == "remove-item") {
        list.removeListItem(event);
    }
})

ul.addEventListener("change", (event) => {
    const input = event.target.value;
    const obj = list.getObject();
    obj[event.target.id] = input;
    list.updateObject(obj);
    const array = Object.values(obj);
    localStorage.setItem("list", JSON.stringify(obj));
    list.updateEntries(array);
})

ul.addEventListener("dragstart", (event) => {
    drag.addDragClass(event);
});

ul.addEventListener("dragend", (event) => {
    drag.removeDragClass(event);
    // list.clearListItems();
    // list.resetRank();
    // const arrayList = list.getEntries();
    // list.reorderList(arrayList);
});

// ul.addEventListener("dragover", (event) => {
//     event.preventDefault();
//     let currentElement = null;
//     const afterElement = drag.getDragAfterElement(ul, event.clientY);
//     currentElement = drag.getCurrentElement();

//     if (afterElement == null) {
//         ul.appendChild(currentElement);} 
//     else {
//         ul.insertBefore(currentElement, afterElement);}
// });
    // const dragRank = drag.getRank();
    // const dragValue = drag.getName() - 1;
    // let currentRank = event.target.name - 1;
    // if (currentRank == NaN) {
    //     currentRank = event.target.name;
    // }
    // const entryList = list.getEntries();
    // entryList.splice(currentRank, 1);
    // entryList.splice(dragRank, 1, dragValue);
    // list.updateEntries(entryList);
