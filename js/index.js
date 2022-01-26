// var btn = document.getElementById('pet__btn');
// var caja = document.getElementById('pet__text');
// var contador = 0;

//     function cambio(){
//         if (contador==0){
//             caja.classList.add('visible');
//             contador=1;
//         } else {
//             caja.classList.remove('visible');
//             contador=0;
//         };
//     };

//     btn.addEventListener('click', cambio, true)

function setActive(index) {
    // console.log(index);
    document.querySelectorAll('.aboutme__text')[index].style.display = 'block';
}

const gifs = [
    "https://media.giphy.com/media/fZNQv37Zv51iU/giphy.gif",
    "https://media.giphy.com/media/PF83OmDFWCpP80l0X3/giphy.gif",
    "https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif",
    "https://media.giphy.com/media/GxN4ics7OlvsA/giphy.gif",
    "https://media.giphy.com/media/GwGXoeb0gm7sc/giphy.gif",
    "https://media.giphy.com/media/P0y6Ak77f14Sk/giphy.gif"
   ]
   function showPopup() {
     document.querySelector('.dialog').style.display = 'flex';
     document.querySelector('.dialog__gif').src = gifs[randomIntFromInterval(0, gifs.length)];
   }
       
   function randomIntFromInterval(min, max) { // min and max included 
     return Math.floor(Math.random() * (max - min + 1) + min)
   }
     
   function hidePopup() {
     document.querySelector('.dialog').style.display = 'none';}