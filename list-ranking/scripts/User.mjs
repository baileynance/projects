export default class User {
    saveList(title, obj) {
        localStorage.setItem(`${title}`, JSON.stringify(obj));
    }

    loadList(title) {
        const json = localStorage.getItem(`${title}`);
        const obj = JSON.parse(json);
        return obj;
    }

    deleteList(title) {
        localStorage.removeItem(`${title}`);
    }

    runSaveAnimation(event) {
        const content = event.target.textContent;
        event.target.textContent = "";
        event.target.classList.add("spinner");
        setTimeout(() => {
            event.target.textContent = content;
            event.target.classList.remove("spinner");
        }, 1000);
        
    }
}