// let date =new Date();
// return`The endDate is ${endDate}`

// window.onload =() =>{
//     const input =document.querySelectorAll("input");
//     input.addEventListener('timer',clock);

// function clock(){
//     const end = new Date();
//     const now = new Date();
//     const diff =Math.floor(( end-now) / 10000);
  
// if(diff < 0)
// return;

//     input[0].value = Math.floor(diff /3600 / 24);
//     input[1].value = Math.floor((diff /3600) % 24);
//     input[2].value = Math.floor((diff /60) % 60);
//     input[3].value = Math.floor(diff % 60);
  
// }
// clock();

// setInterval(
//     () =>{
//         clock()
//     },1000
// )
// }
// Initialize countdown by setting the target date
const endDate = new Date("2024-10-29T23:59:59"); // Example future date

function clock() {
    const input = document.querySelectorAll("input");
    const now = new Date();
    const diff = Math.floor((endDate - now) / 1000); // Difference in seconds

    if (diff < 0) return; // Stop if countdown is over

    input[0].value = Math.floor(diff / (3600 * 24)); // Days
    input[1].value = Math.floor((diff / 3600) % 24); // Hours
    input[2].value = Math.floor((diff / 60) % 60);   // Minutes
    input[3].value = diff % 60;                      // Seconds
}

function startClock() {
    clock(); // Initial call to display the countdown immediately
    setInterval(clock, 1000); // Update every second
}

// Start countdown when window loads
window.onload = startClock;