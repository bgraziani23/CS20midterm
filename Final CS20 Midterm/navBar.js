function toggleMenu() {
    let elemsClosed = document.getElementsByClassName("nav-button-hamburger-closed");
    let elemsOpen = document.getElementsByClassName("nav-button-hamburger-open");
    if (elemsClosed.length == 0) {
        for (let i = 0; i < 7; i++) {
            elemsOpen[0].className = "nav-button-hamburger-closed";
        }
    }
    else {
        for (let i = 0; i < 7; i++) {
            elemsClosed[0].className = "nav-button-hamburger-open";
        }
    }

    let elemsHamClosed = document.getElementsByClassName("hamburger-button-container-closed");
    let elemsHamOpen = document.getElementsByClassName("hamburger-button-container-open");
    if (elemsHamClosed.length == 0) {
        elemsHamOpen[0].className = "hamburger-button-container-closed";
    }
    else {
        elemsHamClosed[0].className = "hamburger-button-container-open";
    }
}