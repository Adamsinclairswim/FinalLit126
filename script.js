
let clickCount = 0;
let keyboardOverride = false;
let inputElement = null;

const questions = [
  "What’s your biggest fear?",
  "What do you want most?",
  "Who do you trust?",
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

  function createTempQuestionInput(questionText) {
    if (inputElement) inputElement.remove();

    inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.placeholder = questionText;
    inputElement.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        createPopup(`Input received: "${inputElement.value}"`);
        inputElement.remove();
        inputElement = null;
      }
    });
    dynamic.appendChild(inputElement);
  }

  button.addEventListener("click", function () {
    clickCount++;

    if (clickCount <= questions.length) {
      createTempQuestionInput(questions[clickCount - 1]);
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
        keyboardOverride = true;
        break;
      case 30:
        window.location.href = "credits.html";
        break;
      default:
        output.innerText = `You’ve clicked ${clickCount} times.`;
        break;
    }
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
