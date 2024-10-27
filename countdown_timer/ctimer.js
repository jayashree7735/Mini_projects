// let date =new Date();
// return`The endDate is ${endDate}`

window.onload =() =>{
    const input =document.querySelectorAll("input");
    input.addEventListener('timer',clock);

function clock(){
    const end = new Date();
    const now = new Date();
    const diff =Math.floor(( end-now) / 10000);
  
if(diff < 0)
return;

    input[0].value = Math.floor(diff /3600 / 24);
    input[1].value = Math.floor((diff /3600) % 24);
    input[2].value = Math.floor((diff /60) % 60);
    input[3].value = Math.floor(diff % 60);
  
}
clock();

setInterval(
    () =>{
        clock()
    },1000
)
}