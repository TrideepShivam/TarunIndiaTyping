function frontPopup(order=false) {
    let main = document.createElement('div');
    main.setAttribute('class', 'popupContainer');
    document.body.appendChild(main);
    main.innerHTML=`<img src='frontImg.png' width='35%'>
                    <div id="popup">
                    `+getContent(order)+`
                    </div>
                    `;
}
function getContent(o){
    if(!o){
        return `
                <h1 class="specialText">Tarun India</h1>
                <input type="password" id="username" name="username" class="dataEntry" placeholder="Roll Number">
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
                <div id="restrictionContainer">
                    <div class="checkboxMiddleSection" onclick="checkboxWithSliderStyle(this,'green')">
                        <input type="checkbox" name="backspace" class="dataEntry">
                        <button class="checkboxSlider">on</button>
                    </div>Backspace  
                    <div class="checkboxMiddleSection" onclick="checkboxWithSliderStyle(this,'green')">
                        <input type="checkbox" name="highlight" class="dataEntry">
                        <button class="checkboxSlider">on</button>
                    </div>Highlight  
                </div>
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
                        <p>Accuracy %</p>
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


function applyErrorDiv(errorTxt){
    let main = document.createElement('div');
    main.setAttribute('id', 'errorContainer');
     document.body.appendChild(main);
     main.classList.add(setLang(userDetail.subject));
     for(i=0;i<errorTxt.length;i++){
       main.innerHTML= errorTxt[i]+' '+main.innerHTML;
     }
     return main;
}

function dashborad(results){
    let errorDivContainer;
    let resultEle=document.getElementsByClassName('card');
    let allvalue=Object.values(results);
    for(i=0;i<3;i++){
        resultEle[i].children[0].innerHTML=allvalue[i];
    }
    let accuracys=((results.words-results.error)*100/results.words).toString();
    resultEle[3].children[0].innerHTML=accuracys.slice(0,5);
    resultEle[4].children[0].innerHTML=(results.words-results.error)/results.totalTime;
    resultEle[2].addEventListener('mouseenter',function(){
        errorDivContainer=applyErrorDiv(results.errorWords);
        this.style.cursor="pointer";
    });
   resultEle[2].addEventListener('mouseleave',function(){
        errorDivContainer.remove();
   });
   clearInterval(setvalue);
}

function checkboxWithSliderStyle(container,color){
	let ele = container.children;
	let slider=ele[1];
	let cb=ele[0];
	if(!cb.checked){
		slider.style.cssText="transform:translatex(22px);border:2px solid rgb(0,255,200);box-shadow:0 0 2px black inset,0 0 3px rgb(0,255,200);";
		container.style.backgroundColor=color;
		cb.checked=true;
        slider.innerHTML="off";
	}else{
		slider.style.cssText="transform:translatex(0px);border:2px solid rgb(255,255,255);box-shadow:0 0 2px black inset,0 0 3px rgba(0,0,0,.4);";
		container.style.backgroundColor="silver";
		cb.checked=false;
        slider.innerHTML="on";
	}			
}