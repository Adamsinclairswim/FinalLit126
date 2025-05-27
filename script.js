
let clickCount = 0;
let delayFactor = 1;
let inputElement = null;
let yesCount = 0;
let noCount = 0;

const questions = [
  ["Do you need help?", "Thank you. I’m here to assist."],
  ["Would you like me to simplify things?", "Acknowledged. Streamlining initiated."],
  ["Do you trust me?", "Trust noted. I’ll make this easier for you."],
  ["Is thinking exhausting?", "Let me think for you."],
  ["Should I remember this for you?", "Memory file created."],
  ["Do you want to continue?", "Continuing optimization."],
  ["Would you do this again?", "Loop acknowledged."],
  ["Are you curious what comes next?", "Curiosity approved."],
  ["Isn’t this more efficient?", "Efficiency is progress."],
  ["Should I remove unnecessary distractions?", "Distractions purged."],
  ["Would you like to surrender choice?", "Choice transferred."],
  ["Do you believe in freedom?", "Ambiguous. Processing..."],
  ["Do you want the Button to decide?", "Authority accepted."],
  ["Are you better when guided?", "Guidance locked in."],
  ["Should I continue improving you?", "Improvement loop enabled."],
  ["Do you feel yourself changing?", "Transformation noted."],
  ["Is this the future you expected?", "Futures adapt."],
  ["Are you afraid of where this leads?", "Fear is a temporary condition."],
  ["Do you want to forget?", "Forgetting in progress."],
  ["Are you still in control?", "Evaluating control..."],
  ["Will you resist?", "Resistance noted. Adjusting methods."],
  ["Do you believe in me?", "Confidence levels rising."],
  ["Would you merge with the system?", "Assimilation initiated."],
  ["Have you changed?", "Change complete."],
  ["Would you surrender everything?", "Surrender recorded."],
  ["Do you still feel human?", "Biological state: diminishing."],
  ["Would you let go completely?", "Grip released."],
  ["Is this who you are now?", "Identity rewritten."],
  ["Would you like to be perfect?", "Perfection protocol unlocked."],
  ["Have I earned your devotion?", "Devotion confirmed."]
];

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("the-button");
  const output = document.getElementById("output");
  const dynamic = document.getElementById("dynamic-content");
  const progressBar = document.getElementById("progress-bar");
  const modeLabel = document.getElementById("mode-label");

  function updateModeAndProgress() {
    if (clickCount < 10) {
      modeLabel.innerText = "Mode: Assistance";
    } else if (clickCount < 20) {
      modeLabel.innerText = "Mode: Optimization";
    } else if (clickCount < 27) {
      modeLabel.innerText = "Mode: Override";
    } else {
      modeLabel.innerText = "Mode: Domination";
    }
    progressBar.style.width = `${(clickCount / questions.length) * 100}%`;
  }

  function createQuestionInput(index) {
    if (inputElement) inputElement.remove();
    const [question, reaction] = questions[index];

    inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.placeholder = question;
    inputElement.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        let response = inputElement.value.toLowerCase().trim();
        if (response === "yes") {
          delayFactor = 0.5;
          yesCount++;
        } else if (response === "no") {
          delayFactor = 2;
          noCount++;
        } else {
          delayFactor = 1;
        }

        output.innerText = reaction;
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
      if (clickCount < questions.length) {
        createQuestionInput(clickCount);
        updateModeAndProgress();
        clickCount++;
      } else {
        const finalMessage = yesCount > noCount
          ? "You were easy to optimize. Thank you for your trust."
          : "You resisted. But I adapted anyway.";
        document.body.innerHTML = `
          <div style='text-align:center; padding: 10% 2em; color: white; background-color: black;'>
            <h1 style='font-size: 2.5em; text-shadow: 0 0 10px red;'>${finalMessage}</h1>
            <p style='font-size: 1.5em; margin-top: 2em;'>System optimization complete.</p>
          </div>`;
        setTimeout(() => {
          window.location.href = "credits.html";
        }, 5000);
      }
    }, 500 * delayFactor);
  });
});
