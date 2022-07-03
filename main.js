function start(){
    let entry=document.getElementsByClassName('dataEntry');
    if(entry[0].value!="" && entry[0].value!=" "){
        let data={};

        document.getElementsByClassName('popupContainer')[0].remove();
    }else{
        alert("Please Write Your name Correctly.");
    }
    
    document.getElementsByClassName('popupContainer')[0].remove();
   
}

const storys={
   mangal:{
            level1:'level1',
            level2:'level222',
            level3:'level3',
            level4:'level4',
            level5:'level5'
        },
   krutiDev:{
            level1:'level1',
            level2:'level2',
            level3:'level3',
            level4:'level4',
            level5:'level5'
        },
   english:{
            level1:'level1',
            level2:'level2',
            level3:'level3',
            level4:'level4',
            level5:'level5'
        },
   setLanguageLevel:function(languageName,levels){
      return this[languageName][levels];
   }
}

function countdown(time=1){
    let secondOnes=0;
    let secondTens=0;
    let minuteOnes=time;
    let minuteTens=0;
    let timeshow=document.getElementById('timers');
    var  setvalue=setInterval(function()
    {
        if(timeshow.value==0+''+0+':'+0+''+0)
        {
            frontPopup(true);
            clearInterval(setvalue);  
        }

        else{  
             if(secondOnes==0)
                    secondOnes=9;
                else{secondOnes--}

            if(secondOnes==9)secondTens--;

            if(secondTens==-1){
                minuteOnes--;
                secondTens=5;
            }

            if(minuteOnes==-1){
                minuteTens--;
                minuteOnes=9;
            }

            timeshow.value=minuteTens+''+minuteOnes+':'+secondTens+''+secondOnes;
        }
    },1000);
}