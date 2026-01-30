/*
  Démonstration 10 - Timers
*/

// 1.  setTimeout
const timeoutStart = document.getElementById("timeout-start");
const timeoutStop = document.getElementById("timeout-stop");
const timeoutDisplay = document.getElementById("timeout-display");

let timeoutCount = 0;

let timerTimeout;
console.log("timerTimeout :>> ", timerTimeout);

timeoutStart.addEventListener("click", () => {
  if (timerTimeout != null) return;

  console.log("Démarrage du timer...");
  timerTimeout = setTimeout(() => {
    console.log("Déclenchement du callback...");
    timerTimeout = null;
    
    timeoutCount++;
    timeoutDisplay.textContent = timeoutCount;
  }, 1000);
});

timeoutStop.addEventListener("click", () => {
  console.log("Arrêt du timer...");
  clearTimeout(timerTimeout);
  timerTimeout = null;
});

// 2.  setInterval

const intervalStart = document.getElementById("interval-start");
const intervalStop = document.getElementById("interval-stop");
const intervalDisplay = document.getElementById("interval-display");

let intervalCount = 0;

let timerInterval;

intervalStart.addEventListener("click", () => {
  if (timerInterval != null) return;

  timerInterval = setInterval(() => {
    intervalCount++;
    intervalDisplay.textContent = intervalCount;
  }, 1000);
  
});

intervalStop.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});
