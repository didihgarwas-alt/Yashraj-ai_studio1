const promptInput = document.getElementById("prompt");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const resultBox = document.getElementById("resultBox");
const themeBtn = document.getElementById("themeBtn");

// Generate button
generateBtn.addEventListener("click", () => {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    resultBox.innerHTML = `
      <div class="result-placeholder">
        <span>⚠️</span>
        <p>Please enter something first.</p>
      </div>
    `;
    return;
  }

  generateBtn.disabled = true;
  generateBtn.textContent = "⏳ Generating...";

  resultBox.innerHTML = `
    <div class="result-placeholder">
      <span>🤖</span>
      <p>Creating your result...</p>
    </div>
  `;

  // Demo AI response
  setTimeout(() => {
    resultBox.innerHTML = `
      <div class="result-content">
        <h3>✨ AI Result</h3>
        <p>
          You asked:
        </p>
        <div class="user-prompt">
          ${escapeHTML(prompt)}
        </div>
        <p>
          Your idea is ready! Connect an AI API later to generate
          real AI-powered answers.
        </p>
      </div>
    `;

    generateBtn.disabled = false;
    generateBtn.textContent = "✨ Generate";
  }, 1000);
});


// Clear button
clearBtn.addEventListener("click", () => {
  promptInput.value = "";

  resultBox.innerHTML = `
    <div class="result-placeholder">
      <span>🤖</span>
      <p>Your AI result will appear here.</p>
    </div>
  `;
});


// Dark / Light mode
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});


// Prevent HTML injection
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
