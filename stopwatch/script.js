const btnStart=document.querySelector('.start');
const btnstop=document.querySelector('.stop');
const btnReset=document.querySelector('.Reset');


let hrs=min=sec=ms=0, startTimer; 
btnStart.addEventListener('click',()=>{
    btnStart.classList.add("start-active")
    btnstop.classList.remove("stop-active")
    startTimer= setInterval(()=>{
ms++;//ms=ms+1;
if(ms==100){
    sec++;
    ms=0;
}
if(sec==60){
    min++;
    sec=0;
}
if(min==60){
    hrs++;
    min=0;
}
updateDisplay()
},10);
});
btnstop.addEventListener('click',()=>{
    btnStart.classList.remove("start-active")
    btnstop.classList.add("stop-active")
    clearInterval(startTimer);
});
btnReset.addEventListener('click',()=>{
    btnStart.classList.remove("start-active")
    btnstop.classList.remove("stop-active")
    let=hrs=min=sec=ms=0;
    updateDisplay()

});




function updateDisplay(){
    //Formated Display
    phrs=hrs<10?'0'+hrs:hrs;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;
    //output
   document.querySelector('.hrs').innerText=phrs;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;

}