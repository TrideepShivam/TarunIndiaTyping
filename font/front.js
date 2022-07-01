document.body.addEventListener('load',addElementPopup);
function addElementPopup() {
    let main = document.createElement('div');
    main.setAttribute('class', 'popupContainer');
    document.body.appendChild(main);
}