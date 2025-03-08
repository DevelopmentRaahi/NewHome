"use strict";
// stats
document.addEventListener("DOMContentLoaded", function () {
  const statsSection = document.querySelector("#onfocus");
  const counters = document.querySelectorAll("#counter-item b");
  let hasAnimated = false; // To prevent multiple animations

  function animateCounters() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 100; // Adjust speed
      // console.log(speed);
      

      const updateCount = () => {
        if (count < target) {
          count += speed;  
          counter.innerText = ` ${Math.ceil(count)}`;
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target;
          if (target >= 120) {
            counter.innerText += "+ "; // Add "+" only if target > 120
          }
        }
      };

      updateCount();
    });
  }

  function checkScroll() {
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated) {
      animateCounters();
      hasAnimated = true; // Run only once
    }
  }

  window.addEventListener("scroll", checkScroll);
});
