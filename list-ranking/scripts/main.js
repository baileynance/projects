import List from "./List.mjs";
import Drag from "./Drag.mjs";

const list = new List();
const drag = new Drag();

const create = document.getElementById("create");
const ul = document.querySelector("ul");

create.addEventListener("click", () => {
    list.createList();
});

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
    list.updateEntries(array);
})

ul.addEventListener("dragstart", (event) => {
    drag.addDragClass(event);
});

ul.addEventListener("dragend", (event) => {
    drag.removeDragClass(event);
    // list.clearListItems();
    // const arrayList = drag.getArrayList();
    // list.reorderList(arrayList);
});

ul.addEventListener("dragover", (event) => {
    event.preventDefault();
    let currentElement = null;
    let afterElement = drag.getDragAfterElement(ul, event.clientY);
    currentElement = drag.getCurrentElement();
    // console.log(drag.getHoverRank(afterElement));
    // console.log(drag.getHoverValue(afterElement));
});
