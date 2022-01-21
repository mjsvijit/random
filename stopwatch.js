let seconds=0;
let minutes=0;
let hours=0;




function stopWatch(){
 
 
    seconds++;

    if(seconds/60==1){
        seconds=0;
        minutes++;

        if(minutes/60==1){
            minutes=0;
            hours++;
        }
    }


    document.getElementById("display").innerHTML= hours + ":" + minutes + ":" + seconds;

}

let interval=null;
let status="stopped";
function startStop(){

    if(status === "stopped"){

        interval=window.setInterval(stopWatch, 1000);
        document.getElementById("startstop").innerHTML="StopStop";
        status="started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML="StartStop"
        status="stopped";
    }
}
function reset(){

    window.clearInterval(interval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById("display").innerHTML="00:00:00";
    document.getElementById("startstop").innerHTML="StartStop";
}