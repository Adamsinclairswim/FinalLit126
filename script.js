
let clickCount = 0;
let keyboardOverride = false;
let inputElement = null;
let delayFactor = 1;
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
  "Why did you keep clicking?",
  "What do you see when you close your eyes?",
  "Who hurt you?",
  "What would you tell your past self?",
  "What do you need to hear right now?",
  "What have you sacrificed for comfort?",
  "What do you wish you believed in?",
  "When did you give up?",
  "What is your last defense?",
  "Are you still in control?",
  "Why are you still here?",
  "Would you do it all again?",
  "Is this what you wanted?",
  "Have you accepted it?",
  "Do you belong to the Button?"
];

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("the-button");
  const output = document.getElementById("output");
  const dynamic = document.getElementById("dynamic-content");

  // Add ambient sound
  const audio = new Audio("https://cdn.pixabay.com/audio/2021/08/04/audio_a1c2e55b68.mp3");
  audio.loop = true;
  audio.volume = 0.2;
  audio.play();

  function createPopup(message, duration = 3000) {
    const popup = document.createElement("div");
    popup.innerText = message;
    popup.style.position = "fixed";
    popup.style.top = Math.random() * 80 + "%";
    popup.style.left = Math.random() * 80 + "%";
    popup.style.backgroundColor = "rgba(0,0,0,0.85)";
    popup.style.color = "white";
    popup.style.padding = "1em";
    popup.style.borderRadius = "8px";
    popup.style.zIndex = 1000;
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
    timerBox.style.position = "fixed";
    timerBox.style.top = "10px";
    timerBox.style.right = "10px";
    timerBox.style.padding = "1em";
    timerBox.style.backgroundColor = "black";
    timerBox.style.color = "red";
    timerBox.style.fontSize = "1.5em";
    timerBox.style.zIndex = "2000";
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
        let response = inputElement.value.toLowerCase();
        if (index === 2) {
          if (response === "yes") delayFactor = 0.5;
          if (response === "no") delayFactor = 2;
        }
        if (index === 14) {
          createPopup("Accessing webcam…");
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

      if (clickCount === 15) {
        document.body.style.filter = "invert(1)";
      }

      if (clickCount === 25) {
        startCountdown();
      }

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
          applyGlitchEffect(output);
          output.innerText = "All previous inputs have been discarded.";
          break;
        case 29:
          createPopup("Final phase...");
          flickerScreen();
          output.innerText = "Button now says: “You belong to me.”";
          button.innerText = "I control you";
          keyboardOverride = true;
          break;
        case 30:
          window.location.href = "credits.html";
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
