const promptInput = document.getElementById("prompt");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const resultBox = document.getElementById("resultBox");
const themeBtn = document.getElementById("themeBtn");

generateBtn.addEventListener("click", generateVideoPlan);

clearBtn.addEventListener("click", () => {
  promptInput.value = "";

  resultBox.innerHTML = `
    <div class="result-placeholder">
      <span>🎬</span>
      <p>Your YouTube video plan will appear here.</p>
    </div>
  `;
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  themeBtn.textContent =
    document.body.classList.contains("light-mode")
      ? "☀️"
      : "🌙";
});

function generateVideoPlan() {
  const prompt = promptInput.value.trim();

  if (!prompt) {
    resultBox.innerHTML = `
      <div class="result-placeholder">
        <span>⚠️</span>
        <p>Please enter a video idea first.</p>
      </div>
    `;
    return;
  }

  generateBtn.disabled = true;
  generateBtn.textContent = "🎬 Creating...";

  resultBox.innerHTML = `
    <div class="result-placeholder">
      <span>⏳</span>
      <p>Creating your YouTube video plan...</p>
    </div>
  `;

  setTimeout(() => {
    const safePrompt = escapeHTML(prompt);

    resultBox.innerHTML = `
      <div class="result-content">

        <h3>🎬 YouTube Video Plan</h3>

        <h4>💡 Your Idea</h4>
        <div class="user-prompt">
          ${safePrompt}
        </div>

        <h4>📌 Suggested Title</h4>
        <p>
          ${safePrompt} | Minecraft YouTube Video
        </p>

        <h4>📝 Video Script</h4>
        <p>
          Welcome to Yashraj Gaming! Today we are going to
          ${safePrompt}. Watch until the end to see the final result!
        </p>

        <h4>🎥 Scenes</h4>

        <ol>
          <li>Hook – Show the final result.</li>
          <li>Introduction – Explain today's challenge.</li>
          <li>Main gameplay – Show the important steps.</li>
          <li>Final result – Show the completed build.</li>
          <li>Ending – Ask viewers to subscribe.</li>
        </ol>

        <h4>💬 Captions</h4>

        <p>
          🔥 Let's start!<br>
          ⚡ This is going to be amazing!<br>
          🏆 Look at the final result!<br>
          ❤️ Subscribe for more videos!
        </p>

        <div class="video-status">
          🎞️ MP4 generation will be connected through
          an AI video API in the next step.
        </div>

      </div>
    `;

    generateBtn.disabled = false;
    generateBtn.textContent = "✨ Generate";
  }, 1000);
}

function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
