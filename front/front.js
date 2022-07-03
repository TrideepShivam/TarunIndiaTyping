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
                    <option>KrutiDev</option>
                    <option>Mangal</option>
                </select>
                <select class="dataEntry" name="timing">
                    <option>01 min</option>
                    <option>05 min</option>
                    <option>10 min</option>
                    <option>15 min</option>
                </select>
                <select class="dataEntry" name="level">
                        <option>level1</option>
                        <option>level2</option>
                        <option>level3</option>
                        <option>level4</option>
                        <option>level5</option>
                </select>
                <button class="btn" onclick="start()">Start Test</button>
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
                <button class="btn" onclick="location.reload();">Restart</button>
                <p class="themeText" style="font-size:15px;">Powered By Tarun India</p>
                `;
    }
}
