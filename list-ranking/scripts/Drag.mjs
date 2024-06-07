export default class Drag {
    constructor(value = "", rank = 0) {
        this.value = value;
        this.rank = rank;
    }

    addDragClass(event) {
        const parentElement = event.target.parentElement;
        setTimeout(() => {
            parentElement.classList.add("drag");
        }, 0);
    }

    removeDragClass(event) {
        const parentElement = event.target.parentElement;
        setTimeout(() => {
            parentElement.classList.remove("drag");
        }, 0);
    }

    getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll(".draggable:not(.drag)")];

        const active = draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset ) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;

        if (active == null) {
            console.log("undefined");
        } else {
            this.name = active.children[2].name;
            this.rank = active.children[2].value;
        }

        return active;
    }

    getCurrentElement() {
        return document.querySelector(".drag");
    }

    getRank() {
        return this.rank;
    }

    getName() {
        return this.name;
    }
}