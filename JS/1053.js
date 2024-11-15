function change(){
    var value = document.getElementById("choose").value;
    
    if(value==144){
        
        document.getElementById("i144").style.display="inline";

        document.getElementById("pixel").style.display="none";
        document.getElementById("i360").style.display="none";
        document.getElementById("i720").style.display="none";
        document.getElementById("i1080").style.display="none";

    }else if(value==360){
        document.getElementById("i360").style.display="inline";
        
        document.getElementById("pixel").style.display="none";
        document.getElementById("i144").style.display="none";
        document.getElementById("i720").style.display="none";
        document.getElementById("i1080").style.display="none";
    }
    else if(value==720){
        document.getElementById("i720").style.display="inline";
        
        document.getElementById("pixel").style.display="none";
        document.getElementById("i144").style.display="none";
        document.getElementById("i360").style.display="none";
        document.getElementById("i1080").style.display="none";
    }
    else if(value==1080){
        document.getElementById("i1080").style.display="inline";
        
        document.getElementById("pixel").style.display="none";
        document.getElementById("i144").style.display="none";
        document.getElementById("i360").style.display="none";
        document.getElementById("i720").style.display="none";
    }else if(value==4){
        
    }
    else{
        document.getElementById("pixel").style.display="inline";
        
        document.getElementById("i144").style.display="none";
        document.getElementById("i360").style.display="none";
        document.getElementById("i720").style.display="none";
        document.getElementById("i1080").style.display="none";
        
    }

}