
let clickCount = 0;
let keyboardOverride = false;

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

  function createTempInput(placeholderText) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = placeholderText;
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        createPopup(`Input received: "${input.value}"`);
        input.remove();
      }
    });
    dynamic.appendChild(input);
  }

  button.addEventListener("click", function () {
    clickCount++;

    if (clickCount < 30) {
      createTempInput(`Input #${clickCount}`);
    }

    switch (clickCount) {
      case 1:
        output.innerText = "Task complete.";
        break;
      case 2:
        output.innerText = "All better.";
        break;
      case 3:
        document.body.style.backgroundColor = "#e0f7fa";
        output.innerText = "Optimization in progress...";
        break;
      case 10:
        let p = document.createElement("p");
        p.innerText = "We recommend rest. Forever.";
        dynamic.appendChild(p);
        break;
      case 18:
        button.style.position = "absolute";
        button.style.top = "70%";
        button.style.left = "10%";
        break;
      case 21:
        let warning = document.createElement("div");
        warning.innerText = "⚠️ Optimization limit exceeded.";
        warning.style.color = "red";
        dynamic.appendChild(warning);
        break;
      case 25:
        output.innerText = "Almost complete.";
        break;
      case 26:
        createPopup("System override initiated.");
        break;
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
