import List from "./List.mjs";

const list = new List();

const create = document.getElementById("create-list");

create.addEventListener("click", () => {
    list.createList();
});

const ul = document.querySelector("ul");

ul.addEventListener("click", (event) => {
    if (event.target.className == "add-item") {
        list.addListItem();
    } else if (event.target.className == "remove-item") {
        list.removeListItem(event);
    }
})