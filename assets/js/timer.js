const iconClose = document.querySelector('.cancel-icon .bi-x')
const popUp = document.getElementById('pop-up');
const backdrop = document.getElementById('backdrop');

setTimeout(function() {     
  popUp.classList.add('show')
  backdrop.classList.add('show')
}, 2000)


iconClose.addEventListener("click", function () { 
  popUp.classList.remove('show')
  backdrop.classList.remove('show')
})
function startCountdown(minutes, seconds) {
  const timerDisplay = document.querySelector(".timer");
  let remainingTime = minutes * 60 + seconds; // Total time in seconds

  const countdownInterval = setInterval(function () {
    const mins = Math.floor(remainingTime / 60);
    const secs = remainingTime % 60;

   
    const formattedMinutes = mins < 10 ? "0" + mins : mins;
    const formattedSeconds = secs < 10 ? "0" + secs : secs;

 
    timerDisplay.querySelector("#minutes").textContent = formattedMinutes;
    timerDisplay.querySelector("#seconds").textContent = formattedSeconds;

   
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      closePopup(); 
    }

    remainingTime--; 
  }, 1000); 
}

function closePopup() {
  document.getElementById("discountPopup").style.display = "none";
  document.getElementById("backdrop").style.display = "none";
}


window.onload = function () {
  startCountdown(15, 59); 
};
