function start(){
    let entry=document.getElementsByClassName('dataEntry');
    if(entry[0].value!="" && entry[0].value!=" "){
        let data={};

        document.getElementsByClassName('popupContainer')[0].remove();
    }else{
        alert("Please Write Your name Correctly.");
    }
    
}