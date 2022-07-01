function frontPopup(order=false) {
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
    if(!o){
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
        return `
                <h1 class="themeText">Thank You</h1>
                <div id="cardContainer">
                    <div id="word" class="card">
                        <h1>00</h1>
                        <p>Words</p>
                    </div>
                    <div id="keystroke" class="card">
                        <h1>00</h1>
                        <p>Keystrokes</p>
                    </div>
                    <div id="error"class="card">
                        <h1>00</h1>
                        <p>Errors</p>
                    </div>
                    <div id="accuracy" class="card">
                        <h1>0.0</h1>
                        <p>Accuracy</p>
                    </div>
                    <div id="speed" class="card">
                        <h1>00</h1>
                        <p>wpm</p>
                    </div>

                </div>
                <button class="btn">Restart</button>
                <p class="themeText" style="font-size:15px;">Powered By Tarun India</p>
                `;
    }
}