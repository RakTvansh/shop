document.addEventListener("DOMContentLoaded", () => {
  const fullscreenView = document.getElementById("fullscreenView");
  const fullscreenImg = document.getElementById("fullscreenImg");
  const closeBtn = document.getElementById("closeBtn");

  document.getElementById("scrollContent").addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      fullscreenImg.src = e.target.src;
      fullscreenView.style.display = "flex";
    }
  });

  closeBtn.addEventListener("click", () => {
    fullscreenView.style.display = "none";
  });
});
