function frontPopup(order="false") {
    let main = document.createElement('div');
    main.setAttribute('class', 'popupContainer');
    document.body.appendChild(main);
    main.innerHTML=`
                    <div id="popup">
                       `+getContent(order)+`
                    </div>
                    `
}
function getContent(o){
    if(!0){
        return `
                <h1 class="themeText">Tarun India</h1>
                <input name="username" class="dataEntry" placeholder="Name">
                <select class="dataEntry" name="subject">
                    <option>English</option>
                    <option>Kruti Dev</option>
                    <option>Mangal</option>
                </select>
                <select class="dataEntry" name="timing">
                    <option>5 min</option>
                    <option>10 min</option>
                    <option>15 min</option>
                </select>
                <select class="dataEntry" name="level">
                        <option>level 1</option>
                        <option>level 2</option>
                        <option>level 3</option>
                        <option>level 4</option>
                        <option>level 5</option>
                        <option>level 6</option>
                        <option>level 7</option>
                        <option>level 8</option>
                        <option>level 9</option>
                        <option>level 10</option>
                </select>
                <button class="btn">Start Test</button>
                `;
    }else{
        return ``;
    }
}