 function playSound(e) {
   const audio = document.querySelector(`audio[data-key='${e.which}']`);
   const key = document.querySelector(`.keys[data-key='${e.which}']`);

   if (!audio) return;
   audio.currentTime = 0; //при натисканні грає з початку
   audio.play();

   key.classList.add('playing');
 }

 function removePlaying(e) {
   if (e.propertyName !== 'box-shadow') return;
   this.classList.remove('playing');
 }

 const keys = document.querySelectorAll('.keys');
 keys.forEach(key => key.addEventListener('transitionend', removePlaying));

 window.addEventListener('keydown', playSound);

 function mouseClick(e) {
   const mouseaudio = document.querySelector(`audio[data-key='${e.target.dataset.key}']`);
   const key = document.querySelector(`.keys[data-key='${e.target.dataset.key}']`);

   if (!mouseaudio) return;
   mouseaudio.currentTime = 0;
   mouseaudio.play();

 }

 window.addEventListener('mousedown', mouseClick);