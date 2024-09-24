// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
window.onload = function () {
  setTimeout(function () {
    document.querySelector('.slide-up').classList.add('hide');
  }, 6000);
};

const texts = [
  "Backend Developer",
  "Frontend Learner",
  "YouTuber",
  "Freelancer"
];

let index = 0;
let charIndex = 0;
const typingText = document.querySelector('.typing-text');

function type() {
  if (charIndex < texts[index].length) {
      typingText.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Adjust typing speed here (100ms)
  } else {
      setTimeout(erase, 2000); // Pause before erasing
  }
}

function erase() {
  if (charIndex > 0) {
      typingText.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 100); // Adjust erasing speed here (100ms)
  } else {
      index = (index + 1) % texts.length; // Move to the next text
      setTimeout(type, 500); // Pause before typing next text
  }
}

// Start typing effect
type();
