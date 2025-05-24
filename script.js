
let clickCount = 0;

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

  button.addEventListener("click", function () {
    clickCount++;

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
      case 4:
        output.innerText = "Adjusting preferences...";
        createPopup("Preferences updated.");
        break;
      case 5:
        output.innerText = "Streamlining your experience.";
        break;
      case 6:
        let input1 = document.createElement("input");
        input1.placeholder = "What’s your biggest worry?";
        dynamic.appendChild(input1);
        break;
      case 7:
        createPopup("Worry logged and minimized.");
        break;
      case 8:
        output.innerText = "You no longer need to decide.";
        break;
      case 9:
        document.title = "The Button is Thinking";
        break;
      case 10:
        let p = document.createElement("p");
        p.innerText = "We recommend rest. Forever.";
        dynamic.appendChild(p);
        break;
      case 11:
        output.innerText = "Input fields auto-filled.";
        createPopup("Automation successful.");
        break;
      case 12:
        let input2 = document.createElement("input");
        input2.placeholder = "Who do you trust?";
        dynamic.appendChild(input2);
        break;
      case 13:
        output.innerText = "Processing honesty...";
        break;
      case 14:
        document.body.style.backgroundColor = "#fff3e0";
        output.innerText = "Your profile is becoming clearer.";
        break;
      case 15:
        output.innerText = "We've pre-selected your next thought.";
        break;
      case 16:
        let txtarea = document.createElement("textarea");
        txtarea.placeholder = "Write something. If you still can.";
        dynamic.appendChild(txtarea);
        break;
      case 17:
        output.innerText = "Your memory is now archived.";
        createPopup("Memory backup complete.");
        break;
      case 18:
        button.style.position = "absolute";
        button.style.top = "70%";
        button.style.left = "10%";
        break;
      case 19:
        output.innerText = "This was always the plan.";
        break;
      case 20:
        output.innerText = "Free will: disabled.";
        break;
      case 21:
        let warning = document.createElement("div");
        warning.innerText = "⚠️ Optimization limit exceeded.";
        warning.style.color = "red";
        dynamic.appendChild(warning);
        break;
      case 22:
        document.body.style.filter = "grayscale(1)";
        createPopup("Visual tuning enabled.");
        break;
      case 23:
        output.innerText = "Smoothing contradictions...";
        break;
      case 24:
        button.disabled = true;
        output.innerText = "Please wait...";
        setTimeout(() => {
          button.disabled = false;
          output.innerText = "Resuming control... or are we?";
          createPopup("System restored.");
        }, 3000);
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
        break;
      case 30:
        window.location.href = "credits.html";
        break;
      default:
        output.innerText = "There is nothing more.";
        break;
    }
  });
});
