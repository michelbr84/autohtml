document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Button clicked! Welcome to the elegant Hello World page.");
    });
  }

  const nightToggle = document.getElementById("night-toggle");
  if (nightToggle) {
    nightToggle.addEventListener("change", () => {
      if (nightToggle.checked) {
        document.body.classList.add("night-mode");
      } else {
        document.body.classList.remove("night-mode");
      }
    });
  }
});
