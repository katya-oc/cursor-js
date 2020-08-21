 function playSound(e) {
   const audio = document.querySelector(`audio[data-key='${e.key}']`);
   const whiteKeys = document.querySelector(`.white[data-key='${e.key}']`);
   const blackKeys = document.querySelector(`.black[data-key='${e.key}']`);
   if (!audio) return;
   audio.currentTime = 0; //при натисканні грає з початку
   // audio.play();

   if (whiteKeys) {
     whiteKeys.classList.add('playing');
     // return console.log(whiteKeys.classList);
   } else if (blackKeys) {
     blackKeys.classList.add('playingblack');
     // return console.log(blackKeys.classList);
   };
 }


 window.addEventListener('keydown', playSound);

 //  const whites = document.querySelectorAll('.white');
 //  console.log(whites);