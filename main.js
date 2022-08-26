let CurrentState={ // used to compare current word and keep the space index values duting typing.
    readableCurrentIndex:20,
    readableWord:"",
    readableNextIndex:0,
    readableNextWord:"",
    writtenCurrentIndex:-1,
    writtenNextIndex:0,
    writtenWord:"",
    findWrittenWord:function(){
        let content = document.getElementById('write').value;
        word = content.substring(this.writtenCurrentIndex+1,this.writtenNextIndex);
        this.writtenCurrentIndex=this.writtenNextIndex;
        this.writtenWord=word;
    },
    findReadableWord:function(){
        let content = document.getElementById('read').innerHTML;
        let counter = this.readableCurrentIndex+1;
        let character=content[counter];        
        let word="";
        while(character!=" "){
            word=word+character;
            counter++;
            character=content[counter];
        }
        this.readableCurrentIndex=counter;
        console.log(word);
        word=word.substring(0,word.length-7);
        console.log(word);
        this.readableWord=word;

        counter++;
        character=content[counter];
        word="";
        while(character!=" "){
            word=word+character;
            counter++;
            character=content[counter];
        }
        this.readableNextIndex=counter;
        this.readableNextWord=word;
    },
    isSameWord:function(){
        this.findWrittenWord();
        this.findReadableWord();
        let readable = this.readableWord;
        let written = this.writtenWord;
        console.log(readable+' '+written+' '+CurrentState.readableCurrentIndex+' '+CurrentState.readableNextIndex);
        if(readable==written)
            return true;
        else
            return false;
    }
}

const storys={//used to identify the readable content according to subject and level.
    Mangal:{
        level1:`<span id='highlight'>एक</span> बार कुछ बंदरों को एक बड़े से पिंजरे में डाला गया और वहां पर एक सीढी लगाई गई| सीढी के ऊपरी भाग पर कुछ केले लटका दिए गए|उन केलों को खाने के लिए एक बन्दर सीढी के पास पहुंचा| जैसे ही वह बन्दर सीढी पर चढ़ने लगा, उस पर बहुत सारा ठंडा पानी गिरा दिया गया और उसके साथ-साथ बाकी बंदरों पर भी पानी गिरा दिया गया| पानी डालने पर वह बन्दर भाग कर एक कोने में चला गया| थोड़ी देर बाद एक दूसरा बन्दर सीढी के पास पहुंचा| वह जैसे ही सीढी के ऊपर चढ़ने लगा, फिर से बन्दर पर ठंडा पानी गिरा दिया गया और इसकी सजा बाकि बंदरों को भी मिली और साथ-साथ दूसरे बंदरो पर भी ठंडा पानी गिरा दिया गया| ठन्डे पानी के कारण सारे बन्दर भाग कर एक कोने में चले गए| यह प्रक्रिया चलती रही और जैसे ही कोई बन्दर सीढी पर केले खाने के लिए चढ़ता, उस पर और साथ-साथ बाकि बंदरों को इसकी सजा मिलती और उन पर ठंडा पानी डाल दिया जाता| बहुत बार ठन्डे पानी की सजा मिलने पर बन्दर समझ गए कि अगर कोई भी उस सीढी पर चढ़ने की कोशिश करेगा तो इसकी सजा सभी को मिलेगी और उन सभी पर ठंडा पानी डाल दिया जाएगा| अब जैसे ही कोई बन्दर सीढी के पास जाने की कोशिश करता तो बाकी सारे बन्दर उसकी पिटाई कर देते और उसे सीढी के पास जाने से रोक देते| थोड़ी देर बाद उस बड़े से पिंजरे में से एक बन्दर को निकाल दिया गया और उसकी जगह एक नए बन्दर को डाला गया| नए बन्दर की नजर केलों पर पड़ी| नया बन्दर वहां की परिस्थिति के बारे में नहीं जानता था इसलिए वह केले खाने के लिए सीढी की तरफ भागा| जैसे ही वह बन्दर उस सीढी की तरफ भागा, बाकि सारे बंदरों ने उसकी पिटाई कर दी| `,
        level2:`<span id='highlight'>एक</span> नदी के किनारे एक जामुन के पेड़ पर एक बन्दर रहता था जिसकी मित्रता उस नदी में रहने वाले मगरमच्छ के साथ हो गयी। वह बन्दर उस मगरमच्छ को भी खाने के लिए जामुन देता रहता था। एक दिन उस मगरमच्छ ने कुछ जामुन अपनी पत्नी को भी खिलाये। स्वादिष्ट जामुन खाने के बाद उसने यह सोचकर कि रोज़ाना ऐसे मीठे फल खाने वाले का दिल भी खूब मीठा होगा, अपने पति से उस बन्दर का दिल लाने की ज़िद्द की। पत्नी के हाथों मजबूर हुए मगरमच्छ ने भी एक चाल चली और बन्दर से कहा कि उसकी भाभी उसे मिलना चाहती है, इसलिए वह उसकी पीठ पर बैठ जाये ताकि सुरक्षित उसके घर पहुँच जाए। बन्दर भी अपने मित्र की बात का भरोसा कर, पेड़ से नदी में कूदा और उसकी पीठ पर सवार हो गया। जब वे नदी के बीचों-बीच पहुंचे तो मगरमच्छ ने सोचा कि अब बन्दर को सही बात बताने में कोई हानि नहीं और उसने भेद खोल दिया कि उसकी पत्नी उसका दिल खाना चाहती है। बन्दर को धक्का तो लगा लेकिन उसने अपना धैर्य नहीं खोया और तपाक से बोला- 'ओह! तुमने यह बात मुझे पहले क्यों नहीं बताई क्योंकि मैंने तो अपना दिल जामुन के पेड़ की खोखल में सम्भाल कर रखा है। अब जल्दी से मुझे वापस नदी के किनारे ले चलो ताकि मैं अपना दिल लाकर अपनी भाभी को उपहार में देकर उसे खुश कर सकूं।' मूर्ख मगरमच्छ बन्दर को जैसे ही नदी-किनारे ले कर आया बन्दर ने ज़ोर से जामुन के पेड़ पर छलांग लगाई और क्रोध में भरकर बोला– 'अरे मूर्ख, दिल के बिना भी क्या कोई ज़िन्दा रह सकता है? जा, आज से तेरी-मेरी दोस्ती समाप्त।' मगरमच्‍छ निराश होकर घर चला जाता है। मित्रो, बचपन में पढ़ी यह कहानी आज भी मुसीबत के क्षणों में धैर्य रखने की प्रेरणा देती है ताकि हम कठिन समय का डट कर मुकाबला कर सकें। दूसरे, मित्रता का सदैव सम्मान करें। `,
		level3:'level3',
		level4:'level4',
		level5:'level5'
         },
    KrutiDev:{
        level1:"<span id='highlight'>gekjs</span> ns'k esa Loå Jherh bfUnjk xk¡/kh us Hkkjr ds okLrs dqckZfu;k nh gS] mUgsa fgUnqLrku lnk ;kn j[ksxkA ;gk¡ rd fd ns'k ds [kkfrj cgqr cM+h dqckZfu;k¡ nh gSA muds ejus ds ckn ftrus Hkh iz/kkuea=h ,ao eq[;ea=h cus lHkh us ok;nk fd;k Fkk] ge fgnqLrku ds fy;s bZekunkjh ,ao ru eu ls dk;Z djsxsaA gj bUlku dqlhZ dk Hkw[kk gksrk gSA dqlhZ tc rd mls ugha eyrh gS] rc rd >wB lp cksydj ok;ns djrk gSA tc oks ¼pqudj½ thr dj tkrk gSA ogk¡ vius fd;s gq, lkjs okns lc Hkwy tkrk gSA fQj rks mlds n'kZu Hkh ugha gksrs gSA mudk pijklh ;k ckWMh&xkMZ] lykgdkj feyus ls igys gh euk dj nsrk gSA fQj oks jkr fnu csbZekuh djuk] usrkth ?kj ij ugha gS] ckgj x;s gq, gSA fQj oks T;knk&ls&T;knk [kks[kyk] nwljs ns'kksa ls dtkZ djds ns'k dks dtZnkj dj nsrs gSA igys ;g ns'k lksus dh fpfM+;k dgykrk FkkA fdlh le; esa nw/k dh ufn;k¡ cgrh FkhaA vkt dy gj bUlku jkr fnu cbZekuh Hkz”Vkpkj gh djrk gS] dke oks djuk ugha pkgrkA mldk izFke mÌs'; jkr fnu iSlk dekus dk gS pkgs Hkys gh mls iSlk dekus ds okLrs D;k D;k djuk iM+rk gSA oks gh usrk cu ldrk gSA e¡gxkbZ bruh c<+ xbZ gSA fd mls vius [kpZ pykus ds fy, ljdkjh ukSdjh esa dke djus okyk pijklh ls ysdj vkWfQlj rd iSlk dekus es yxk gqvk gSA tks mls ljdkj ls ukSdjh feyrh gS] mlds vykok gsjk&Qsjh djus es yxk jgrk gSA fQj Hkh mlds ifjokj dk xqtkjk ugha gksrk gSA vkenuh vBUuh [kpkZ :i;k gSA bUlku us vius [kpZ brus uktk;t+ c<+k j[ks gSaA igys tekus esa eksVk [kkrs Fks] eksVk igurs FksA igys ,d dekrk Fkk iwjk ifjokj cSBdj [kkrk FkkA vkt dy ?kj ifjokj Hkh fc[kjs gq, gSaA fdlh dks fdlh ds fy, le; ugha gSA fdlh egkiq:”k us dgk Fkk *LoxZ vkSj udZ fdlh Hkh ifjokj ds la;qä gksus ij fuHkZj djrk gSA* eSa vk’kk djrk gq¡ fd LoxZ vkSj udZ dk mŸkj vkidks fey x;k gksA esjh rks ;gh bPNk gS fd lHkh lq[kh gksa lHkh LoLFk gksaA D;ksafd vki rks tkurs gh gSa fd gekjh ;gh laLd`fr gS& ^olq/kSo dqVqEcde~A*",
        level2:'level2',
        level3:'level3',
        level4:'level4',
        level5:'level5'
         },
    English:{
        level1:`<span id='highlight'>A</span> long time ago, during a devastating spell of dry weather, there was a thirsty crow who was desperate for a drink of water. The poor crow flew and flew in search of a means to quench his thirst. From one place to another place he went, until, at long last, when he could fly no further, he came upon a large pitcher of water at the base of a tree. Overjoyed, the thirsty crow thrust its jet-black beak inside to drink his fill. But, alas! the pitcher had a narrow neck. Try as he might, the despairing crow couldn't get his head far enough inside. To his dismay, he realized the water was out of reach. The thirsty crow cried out and flapped his wings in anguish. He attempted to knock the pitcher over. But to no avail. It was too heavy for his weary, dehydrated body to budge. The crow was on the verge of exhaustion and ready to fly elsewhere. But then an idea came to him. Around the base of the pitcher he seen some small round pebbles. Picking them up, one by one, the thirsty crow dropped them into the pitcher. Again and again he placed these stones inside. And with every extra pebble, the water level began to rise. His idea worked. Eventually, after much toil, the water rose so high inside the pitcher that the clever crow was able to drink his fill and state his thirst for good. Then he flew away for his work. So, now we can say this situation in our life too. Humans are always stuck in any of the problem every time and here is no way to solve them immediately then every one should have to keep calm and think more about the solution we need and definitely you will get any solution as like as crow gets it. It is said, 'There is a will, there is a way' always. Thank you for reading this story. `,
        level2:'level2',
        level3:'level3',
        level4:'level4',
        level5:'level5'
         },
    setLanguageLevel:function(languageName,levels){
        return this[languageName][levels];
    }
 }
let scrollPixel=0;//to calculate scroll top for read Element;
let userDetail={}//includes user's detail from first form.
var setvalue=null;//used to aquire timer interval to stop and resume the timer
let Timing={//containers time value with minute, tens value of second and ones value of second.
    min:0,
    secTens:0,
    secOnes:0
}
 
let Result = {
    words:0,
    keystrokes:0,
    error:0,
    totalTime:0,
    errorWords:[]
}

function start(){
    let today=new Date();
    if(today.getDay()!=6){/*set it as ==6 if you don't wanna start app on sunday*/
        let entry=document.getElementsByClassName('dataEntry');
        if(entry[0].value!="" && entry[0].value!=" "){
            for(i=0;i<entry.length;i++){
                ele=entry[i];
                if(ele.type=="checkbox" || ele.type=="radio"){
                    userDetail[ele.name]=ele.checked;
                }
                else{
                    userDetail[ele.name]=ele.value;
                }
            }
            deploy(userDetail);
            document.getElementsByClassName('popupContainer')[0].remove();
        }else{
            alert("Please Write Your name Correctly.");
        }
    }else{
        let main = document.getElementsByClassName('popupContainer')[0];
        main.innerHTML=`
                        <div id="popup">
                            <p id="highlight">App will Start only on</p>
                            <h1 class="specialText"><b>शनिवार</b></h1>
                            <div id="animationContainer">
                                <div class="animationBox" id="ab10">ध</div>
                                <div class="animationBox" id="ab9">न्‍य</div>
                                <div class="animationBox" id="ab8">वा</div>
                                <div class="animationBox" id="ab7">द</div>
                                <div class="animationBox" id="ab6">म्</div>
                            </div>
                            <button class="btn" id="btnClose" onclick="window.close();">close</btn>
                        </div>
                        `;
        document.getElementById('popup').style.cssText="background-image:url('saturdayImg.png');background-size:cover;justify-content:flex-start;";
    }
}

function deploy(){
    //put user detail in global object to use it on restart.
    let readPara=document.getElementById('read');
    readPara.innerHTML=storys.setLanguageLevel(userDetail.subject,userDetail.level);
    document.getElementById('userName').innerHTML=userDetail.username;
    Timing.min = userDetail.timing.slice(0,2);
    document.getElementById('timers').value= Timing.min + ':00';
    Result.totalTime=Timing.min;
    readPara.classList.add(setLang(userDetail.subject));
    document.getElementById('write').classList.add(setLang(userDetail.subject));
    if(userDetail.highlight){
        document.getElementById('highlight').removeAttribute('id'); /* change the id because the style is merged as inline style in highlight */
        CurrentState.readableCurrentIndex=5;
    }
    
}

function setLang(subs) {
    switch (subs) {
        case 'English':
            return 'forEnglish';
        case 'KrutiDev':
			document.getElementById('write').placeholder=";gk¡ fy[ksa";
            return 'forKrutiDev';
        case 'Mangal':
            return 'forMangal';
        default:
            break;
    }
}

function countdown(time){

    let minuteOnes=time.slice(time.length-1,time.length);
    let minuteTens;

    if(time.length==1){minuteTens=0;}
    else{minuteTens=time.slice(0,1);}

    let timeshow=document.getElementById('timers');
    timeshow.value=minuteTens+''+minuteOnes+':'+Timing.secTens+''+Timing.secOnes;
       

    setvalue=setInterval(function()
    {
        if(timeshow.value==0+''+0+':'+0+''+0)
        {
            frontPopup(true);
            dashborad(Result);
            clearInterval(setvalue);  
        }

        else{  
             if(Timing.secOnes==0)
                    Timing.secOnes=9;
                else{Timing.secOnes--}

            if(Timing.secOnes==9)Timing.secTens--;

            if(Timing.secTens==-1){
                minuteOnes--;
                Timing.secTens=5;
            }

            if(minuteOnes==-1){
                minuteTens--;
                minuteOnes=9;
            }

            timeshow.value=minuteTens+''+minuteOnes+':'+Timing.secTens+''+Timing.secOnes;
        }
    },1000);
}

function highlightNext(){
    let highlightedArea = document.querySelector('#read span').innerHTML;
    let content = document.getElementById('read');
    //used to identify that how many words there in the total story.
    // let c=content.innerHTML;
    // let count=0;
    // for(i=0;i<c.length;i++){
    //     if(c[i]==' '){count++;}
    // }
    // console.log(count);

    let nonHighlightedArea = content.innerHTML.substring(CurrentState.readableNextIndex);
    if(!userDetail.highlight){
        content.innerHTML='<span id="highlight">'+highlightedArea+' '+CurrentState.readableNextWord+'</span>'+nonHighlightedArea;
    }else{/* if user prevent highlights*/
        content.innerHTML='<span>'+highlightedArea+' '+CurrentState.readableNextWord+'</span>'+nonHighlightedArea;
    }
    CurrentState.readableCurrentIndex-=7;
}

function typing(currentEle,e){
    Result.keystrokes+=1;
    let content= currentEle.value;
    let newKey= e.key;
    let w = document.getElementById('write');
    if(w.style.color=='tomato'){
    		w.style.color='white';
    }
    if(newKey==' '){
        let currentSpace=content.length-1;
        let r = document.getElementById('readable');
        if((Result.words+1)%75==0){
             scrollPixel+=140;
             r.scrollTop=scrollPixel;
        }
        CurrentState.writtenNextIndex = content[currentSpace]==' '?currentSpace:currentSpace-1;
        console.log('next space '+CurrentState.writtenNextIndex+' char is '+content[CurrentState.writtenNextIndex]);        
         Result.words+=1;
         document.getElementById('totalWords').value=Result.words;
         if(!CurrentState.isSameWord()){
     	w.style.color='tomato';
            Result.error+=1;
            if(userDetail.subject!='KrutiDev'){
                eWord='['+CurrentState.readableWord+' : '+CurrentState.writtenWord+']';
            }else{
                eWord='¿'+CurrentState.readableWord+' % '+CurrentState.writtenWord+'À';
            }             
             Result.errorWords.push(eWord);
         }
         highlightNext();
         
     }else if(newKey=='Pause'){
         clearInterval(setvalue);
         let timeshowValue=document.getElementById('timers').value;
         Timing.min=timeshowValue.slice(0,2);
         Timing.secTens=timeshowValue.slice(3,4);
         Timing.secOnes=timeshowValue.slice(4,5);
         setvalue=null;
     }else{
         if(setvalue==null){
             countdown(Timing.min);
         }
         // startTimer
     }
}

function backspacePrevent(e,content){
    let condition = userDetail.backspace?e.key=='Backspace':e.key=='Backspace'&&content[content.length-1]==' ';
    if(condition){
        console.log(e.key+" "+condition)
        e.preventDefault();
    }
}
// put all commented detail in user detail global object
