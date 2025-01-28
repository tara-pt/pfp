document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const profile = document.querySelector(".black");
    profile.classList.add("clear");
  }, 300);
});

let i = 0;

function triggerGlitch() {
  const glitch = document.querySelectorAll(".glitch");
  glitch.forEach((el) => {
    el.classList.add("active");
  });

  setTimeout(() => {
    glitch.forEach((el) => {
      el.classList.remove("active");
    });
  }, 200);

  // Determine the next delay dynamically
  const nextDelay = i < 1 ? 4000 : 7000;
  i++; // Increment the counter

  // Set up the next timeout
  setTimeout(triggerGlitch, nextDelay);
}

triggerGlitch();
