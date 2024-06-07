function buildHeader() {
    const headerHTML = `<h1>List Ranking</h1>`;
    const header = document.querySelector("header");
    header.innerHTML = headerHTML;
}

function buildFooter() {
    const footerHTML = `<p>WDD 330</p>
    <p>Final Project</p>
    <p>Bailey Nance</p>`;
    const footer = document.querySelector("footer");
    footer.innerHTML = footerHTML;
}

buildHeader();
buildFooter();