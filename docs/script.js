document.addEventListener("DOMContentLoaded", () => {
  const nightToggle = document.getElementById("night-toggle");
  const messages = document.getElementById("messages");
  const input = document.getElementById("input");
  const sendBtn = document.getElementById("send-btn");

  if (nightToggle) {
    nightToggle.addEventListener("change", () => {
      document.body.classList.toggle("night-mode", nightToggle.checked);
    });
  }

  function appendMessage(text, role) {
    if (!messages) return;
    const el = document.createElement("div");
    el.className = `message ${role}`;
    el.textContent = text;
    messages.appendChild(el);
  }

  function send() {
    if (!messages || !input) return;
    const text = input.value.trim();
    if (!text) return;
    appendMessage(text, "user");
    appendMessage("This is a simulated response.", "assistant");
    messages.scrollTop = messages.scrollHeight;
    input.value = "";
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", send);
  }

  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    });
  }
});