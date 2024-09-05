function startCountdown(minutes, seconds) {
  const timerDisplay = document.querySelector(".timer");
  let remainingTime = minutes * 60 + seconds; // Total time in seconds

  const countdownInterval = setInterval(function () {
    const mins = Math.floor(remainingTime / 60);
    const secs = remainingTime % 60;

    // Format minutes and seconds
    const formattedMinutes = mins < 10 ? "0" + mins : mins;
    const formattedSeconds = secs < 10 ? "0" + secs : secs;

    // Update the timer display
    timerDisplay.querySelector("#minutes").textContent = formattedMinutes;
    timerDisplay.querySelector("#seconds").textContent = formattedSeconds;

    // Stop the timer when it reaches zero
    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      closePopup(); // Optionally hide the pop-up
    }

    remainingTime--; // Decrease the remaining time by 1 second
  }, 1000); // Run every second
}

function closePopup() {
  document.getElementById("discountPopup").style.display = "none";
}

// Start the countdown when the page loads
window.onload = function () {
  startCountdown(15, 45); // Start the countdown from 15:45
};
