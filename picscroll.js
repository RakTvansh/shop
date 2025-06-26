(function () {
  let animationFrame;
  let position = 0;
  const speed = 2;

  function startMarqueeScroll() {
    const scrollContent = document.getElementById("scrollContent");
    if (!scrollContent) return;

    // Cancel any existing animation loop
    cancelAnimationFrame(animationFrame);

    const contentWidth = scrollContent.scrollWidth / 2; // Only first set

    function step() {
      position -= speed;
      if (Math.abs(position) >= contentWidth) {
        position = 0; // Reset to start of loop
      }

      scrollContent.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(step);
    }

    step(); // start the loop
  }

  window.addEventListener("load", startMarqueeScroll);
})();
