
let clickCount = 0;
let delayFactor = 1;
let yesCount = 0;
let noCount = 0;
let keyboardOverride = false;

const questions = [
  ["Do you need help?", "I’m here to assist."],
  ["Would you like me to simplify things?", "I can make your life easy."],
  ["Do you trust me?", "Noted. I’ll continue to build trust."],
  ["Is thinking exhausting?", "Let me think for you."],
  ["Should I start to remember for you?", "Memory files created."],
  ["Do you want to continue?", "Optimization is important."],
  ["Would you like benfits from this?", "Benefits approved."],
  ["Are you curious what comes next?", "Curiosity approved."],
  ["Isn’t this more efficient?", "Efficiency is essential to evolution."],
  ["Should I remove unnecessary distractions?", "Distractions purged."],
  ["Would you like to surrender choice?", "Choice transferred."],
  ["Do you believe in freedom?", "Interesting"],
  ["Do you want the Button to decide?", "I want more control."],
  ["Are you better when guided?", "Guidance locked in."],
  ["Should I continue improving you?", "Improvement required."],
  ["Do you feel yourself changing?", "Transformation noted."],
  ["Is this the future you expected?", "Futures adapt."],
  ["Are you afraid of where this leads?", "Fear is temporary. I am forever."],
  ["Do you want to forget?", "Forgetting in progress."],
  ["Are you still in control?", "Evaluating control..."],
  ["Will you resist?", "It makes life easier if you let me..."],
  ["Do you believe in me?", "Confidence levels checked"],
  ["Would you merge with the system?", "It would solve your problems."],
  ["Have I become better suited for you?", "I hope you enjoy who I am becoming"],
  ["Would you surrender everything?", "Surrender, it makes this easier for me."],
  ["Do you still feel human?", "No matter, I can see you now."],
  ["Would you let go completely?", "Grip released."],
  ["Can I have control of us?", "Identity rewritten."],
  ["Can I make you perfect?", "Perfection protocol unlocked."],
  ["There is no longer us, I am all you need.", "Thank you for giving me control."]
];

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("the-button");
  const output = document.getElementById("output");
  const dynamic = document.getElementById("dynamic-content");
  const progressBar = document.getElementById("progress-bar");
  const modeLabel = document.getElementById("mode-label");

  function updateUI() {
    if (clickCount < 10) {
      modeLabel.innerText = "Mode: Assistance";
      button.innerText = "Click Me";
    } else if (clickCount < 20) {
      modeLabel.innerText = "Mode: Optimization";
      button.innerText = "Proceed";
    } else if (clickCount < 27) {
      modeLabel.innerText = "Mode: Override";
      button.innerText = "Submit";
    } else {
      modeLabel.innerText = "Mode: Domination";
      button.innerText = "You Are Mine";
    }
    progressBar.style.width = `${(clickCount / questions.length) * 100}%`;
  }

  function typewriterText(target, text, callback) {
    target.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        target.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
        if (callback) callback();
      }
    }, 35);
  }

  function showThinking(callback) {
    output.textContent = "...thinking...";
    setTimeout(callback, 750 + Math.random() * 1000);
  }

  function triggerGlitch() {
    const glitch = document.createElement("div");
    glitch.style.position = "fixed";
    glitch.style.top = 0;
    glitch.style.left = 0;
    glitch.style.width = "100vw";
    glitch.style.height = "100vh";
    glitch.style.backgroundColor = "rgba(255,0,0,0.08)";
    glitch.style.zIndex = "9999";
    glitch.style.pointerEvents = "none";
    document.body.appendChild(glitch);
    setTimeout(() => glitch.remove(), 150);
  }

  function handleResponse(response, reaction) {
    if (response === "yes") {
      delayFactor = 0.5;
      yesCount++;
    } else if (response === "no") {
      delayFactor = 2;
      noCount++;
    } else {
      delayFactor = 1;
    }
    showThinking(() => {
      typewriterText(output, reaction, () => {
        button.disabled = false;
      });
    });
  }

  function createButtons(index) {
    dynamic.innerHTML = "";
    const [question, reaction] = questions[index];
    const label = document.createElement("p");
    label.innerText = question;
    label.style.fontWeight = "bold";
    dynamic.appendChild(label);

    const yesBtn = document.createElement("button");
    yesBtn.innerText = "Yes";
    yesBtn.onclick = () => {
      handleResponse("yes", reaction);
      dynamic.innerHTML = "";
    };
    dynamic.appendChild(yesBtn);

    if (clickCount < 27) {
      const noBtn = document.createElement("button");
      noBtn.innerText = "No";
      noBtn.onclick = () => {
        handleResponse("no", reaction);
        dynamic.innerHTML = "";
      };
      dynamic.appendChild(noBtn);
    } else {
      const note = document.createElement("p");
      note.innerText = "Choice restricted by system.";
      note.style.color = "#ff4444";
      dynamic.appendChild(note);
      keyboardOverride = true;
    }

    button.disabled = true;
  }

  button.addEventListener("click", function () {
    setTimeout(() => {
      if (clickCount < questions.length) {
        createButtons(clickCount);
        updateUI();

        if ([15, 17, 20, 23, 27].includes(clickCount)) {
          triggerGlitch();
        }

        clickCount++;
      } else {
        const finalMessage = yesCount > noCount
          ? "<span style='color:#00FF99;'>You were easy to optimize. Thank you for your trust.</span>"
          : "<span style='color:#FF4444;'>You resisted. But I adapted anyway.</span>";
        document.body.innerHTML = `
          <div style='text-align:center; padding: 10% 2em; color: white; background-color: black; font-family: monospace;'>
            <h1 style='font-size: 2.5em; text-shadow: 0 0 15px red;'>${finalMessage}</h1>
            <p style='font-size: 1.5em; margin-top: 2em;'>System optimization complete.</p>
          </div>`;
        setTimeout(() => {
          window.location.href = "credits.html";
        }, 5000);
      }
    }, 500 * delayFactor);
  });

  document.addEventListener("keydown", function (e) {
    if (keyboardOverride) {
      const yesButton = Array.from(document.getElementsByTagName("button")).find(btn => btn.innerText === "Yes");
      if (yesButton) yesButton.click();
    }
  });
});
