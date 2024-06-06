const listElement = document.getElementById("list");

const listTemplate = 
    `<li class="item-container">
        <button class="remove-item">-</button>
        <input class="text" placeholder="Enter list item"></input>
        <button class="add-item">+</button>
    </li>`;

export default class List {
    createList() {
        this.clearListItems();
        const title = document.getElementById("list-name").value;
        const h2 = document.createElement("h2");
        h2.textContent = title;
        const listCont = document.querySelector("#list-creation");
        listCont.appendChild(h2);        
        this.addListItem();
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
    
    addListItem() {
        const li = document.createElement("li");
        li.innerHTML = listTemplate;
        listElement.appendChild(li);
    }

    removeListItem(event) {
        const parentElement = event.target.parentElement;
        parentElement.remove();
    }

    moveItem() {

    }

    rankUp() {

    }

    rankDown() {
        
    }
    
}