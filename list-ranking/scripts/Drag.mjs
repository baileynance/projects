export default class Drag {
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

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset ) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }

    getCurrentElement() {
        return document.querySelector(".drag");
    }

    getHoverRank(hover) {
        return hover.querySelector("input").name;
    }

    getHoverValue(hover) {
        return hover.querySelector("input").value;
    }
}