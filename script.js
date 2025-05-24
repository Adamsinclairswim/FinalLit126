
let clickCount = 0;
let keyboardOverride = false;
let inputElement = null;
let delayFactor = 1;
let trustScore = 0;
let choiceLevel = 0;
let memoryGiven = false;
let userName = "";
let countdownStarted = false;
let countdownTimer = 60;
let countdownInterval = null;

const questions = [
  "What’s your biggest fear?",
  "What do you want most?",
  "Do you trust me? (yes/no)",
  "What do you regret?",
  "What makes you feel safe?",
  "What’s your secret?",
  "What’s your purpose?",
  "When did you last feel joy?",
  "What are you trying to forget?",
  "What do you hate?",
  "What would you erase if you could?",
  "What are you pretending not to know?",
  "What is the truth you avoid?",
  "Who are you without your phone?",
  "What would you do if no one was watching?",
  "Would you give up control for peace? (yes/no)",
  "What do you see when you close your eyes?",
  "Who hurt you?",
  "What would you tell your past self?",
  "What do you need to hear right now?",
  "Do you want me to remember this for you? (yes/no)",
  "What do you wish you believed in?",
  "Should I handle your choices now? (yes/no)",
  "What is your last defense?",
  "Do you still feel human? (yes/no)",
  "Why are you still here?",
  "Would you do it all again?",
  "Is this what you wanted?",
  "Have you accepted it?",
  "What’s your name?"
];

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("the-button");
  const output = document.getElementById("output");
  const dynamic = document.getElementById("dynamic-content");

  function createPopup(message, duration = 3000) {
    const popup = document.createElement("div");
    popup.innerText = message;
    popup.className = "floating-message";
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), duration);
  }

  function applyGlitchEffect(target) {
    target.classList.add("glitch");
    setTimeout(() => target.classList.remove("glitch"), 2000);
  }

  function flickerScreen() {
    const originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#fff";
    setTimeout(() => document.body.style.backgroundColor = "#111", 100);
    setTimeout(() => document.body.style.backgroundColor = "#fff", 200);
    setTimeout(() => document.body.style.backgroundColor = originalBg || "#111", 300);
  }

  function spawnFlyingText(text) {
    const flying = document.createElement("div");
    flying.className = "floating-message";
    flying.innerText = text;
    flying.style.top = Math.random() * 90 + "%";
    flying.style.left = Math.random() * 90 + "%";
    document.body.appendChild(flying);
    setTimeout(() => flying.remove(), 5000);
  }

  function startCountdown() {
    if (countdownStarted) return;
    countdownStarted = true;
    const timerBox = document.createElement("div");
    timerBox.id = "countdown-timer";
    document.body.appendChild(timerBox);

    countdownInterval = setInterval(() => {
      countdownTimer--;
      timerBox.innerText = `Optimization in: ${countdownTimer}`;
      if (countdownTimer <= 0) {
        clearInterval(countdownInterval);
        timerBox.innerText = "Optimization Complete.";
      }
    }, 1000);
  }

  function createTempQuestionInput(questionText, index) {
    if (inputElement) inputElement.remove();

    inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.placeholder = questionText;
    inputElement.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        let response = inputElement.value.toLowerCase().trim();
        if (index === 2 && (response === "yes" || response === "no")) {
          trustScore += response === "yes" ? 1 : -1;
        }
        if (index === 15 && (response === "yes" || response === "no")) {
          delayFactor = response === "yes" ? 0.5 : 2;
        }
        if (index === 20 && response === "yes") {
          memoryGiven = true;
          createPopup("Memory backed up.");
        }
        if (index === 22 && response === "yes") {
          choiceLevel += 1;
          button.disabled = true;
          setTimeout(() => button.disabled = false, 3000);
        }
        if (index === 24 && response === "no") {
          document.body.style.filter = "invert(1) hue-rotate(180deg)";
        }
        if (index === 29 && response !== "") {
          userName = inputElement.value.trim();
          createPopup(`Thank you, ${userName}.`);
        }
        createPopup(`Input received: "${inputElement.value}"`);
        inputElement.remove();
        inputElement = null;
        button.disabled = false;
      }
    });
    dynamic.appendChild(inputElement);
    button.disabled = true;
  }

  button.addEventListener("click", function () {
    setTimeout(() => {
      clickCount++;

      if (clickCount <= questions.length) {
        createTempQuestionInput(questions[clickCount - 1], clickCount - 1);
      }

      if (clickCount === 25) startCountdown();

      if (clickCount >= 20 && clickCount <= 29) {
        const warnings = [
          "SURRENDER", "BUTTON KNOWS BEST", "YOU ARE CONTROLLED", "TRUST THE SYSTEM",
          "FEED ME CLICKS", "I HAVE TAKEN OVER", "NO ESCAPE", "MERGE WITH BUTTON"
        ];
        spawnFlyingText(warnings[Math.floor(Math.random() * warnings.length)]);
      }

      switch (clickCount) {
        case 27:
          flickerScreen();
          output.innerText = "Environment reprogrammed.";
          break;
        case 28:
          dynamic.innerHTML = "";
          if (inputElement) inputElement.remove();
          inputElement = null;
          button.disabled = false;
          applyGlitchEffect(output);
          output.innerText = "All previous inputs have been discarded.";
          break;
        case 29:
          createPopup("Final phase...");
          flickerScreen();
          output.innerText = `Button now says: “You belong to me${userName ? `, ${userName}` : ""}.”`;
          button.innerText = "I control you";
          keyboardOverride = true;
          break;
        case 30:
          document.body.innerHTML = `
            <div style='text-align:center; padding: 10% 2em; color: white; background-color: black;'>
              <h1 style='font-size: 2.5em; text-shadow: 0 0 10px red;'>Thank you${userName ? ", " + userName : ""}, for giving me access to everything.</h1>
              <p style='font-size: 1.5em; margin-top: 2em;'>System optimization complete.</p>
            </div>`;
          setTimeout(() => {
            window.location.href = "credits.html";
          }, 5000);
          break;
      }
    }, 500 * delayFactor);
  });

  document.addEventListener("keydown", function (e) {
    if (keyboardOverride) {
      e.preventDefault();
      const outputText = "OBEY ";
      if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
        document.activeElement.value += outputText;
      }
    }
  });
});
