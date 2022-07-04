const storys={
    Mangal:{
             level1:'level1 is good ',
             level2:'level222',
             level3:'level3',
             level4:'level4',
             level5:'level5'
         },
    KrutiDev:{
             level1:'level1',
             level2:'level2',
             level3:'level3',
             level4:'level4',
             level5:'level5'
         },
    English:{
             level1:`A long time ago, during a devastating spell of dry weather, there was a thirsty crow who was desperate for a drink of water. The poor crow flew and flew in search of a means to quench his thirst. From one place to another he went, until, at long last, when he could fly no further, he came upon a large pitcher of water at the base of a tree. Overjoyed, the thirsty crow thrust its jet-black beak inside to drink his fill. But, alas, the pitcher had a narrow neck! Try as he might, the despairing crow couldn’t get his head far enough inside. To his dismay, he realized the water was out of reach. The thirsty crow cried out and flapped his wings in anguish. He attempted to knock the pitcher over. But to no avail. It was too heavy for his weary, dehydrated body to budge. The crow was on the verge of exhaustion and ready to fly elsewhere. But then an idea came to him. Around the base of the pitcher sat some small round pebbles. Picking them up, one by one, the thirsty crow dropped them into the pitcher. Again and again he placed these stones inside. And with every extra pebble, the water level began to rise. His idea worked. Eventually, after much toil, the water rose so high inside the pitcher that the clever crow was able to drink his fill and sate his thirst for good.`,
             level2:'level2',
             level3:'level3',
             level4:'level4',
             level5:'level5'
         },
    setLanguageLevel:function(languageName,levels){
        return this[languageName][levels];
    }
 }



 
function start(){
    let entry=document.getElementsByClassName('dataEntry');
    if(entry[0].value!="" && entry[0].value!=" "){
        let userDetail={};
        for(i=0;i<entry.length;i++){
            ele=entry[i];
            userDetail[ele.name]=ele.value;
        }
        deploy(userDetail);
        document.getElementsByClassName('popupContainer')[0].remove();
    }else{
        alert("Please Write Your name Correctly.");
    }
}

function deploy(userDetails){
    document.getElementById('read').innerHTML=storys.setLanguageLevel(userDetails.subject,userDetails.level);
    document.getElementById('userName').innerHTML=userDetails.username;
    document.getElementById('timers').value=userDetails.timing.slice(0,2) + ':00';
}

var setvalue;

function countdown(time,secondTens,secondOnes){

    let minuteOnes=time.slice(time.length-1,time.length);
    let minuteTens;

    if(time.length==1){minuteTens=0;}
    else{minuteTens=time.slice(0,1);}

    let timeshow=document.getElementById('timers');
    timeshow.value=minuteTens+''+minuteOnes+':'+secondTens+''+secondOnes;
       

    setvalue=setInterval(function()
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

document.addEventListener('keyup',function(event){
var x = event.key;
if(x=='Pause')
{
clearInterval(setvalue);
let timeshowValue=document.getElementById('timers').value;
min=timeshowValue.slice(0,2);
secTens=timeshowValue.slice(3,4);
secOnes=timeshowValue.slice(4,5);
}
if(x=='ArrowRight'){
    
    countdown(min,secTens,secOnes);
}
});