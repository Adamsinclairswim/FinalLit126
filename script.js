
let clickCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("the-button");
  const output = document.getElementById("output");
  const dynamic = document.getElementById("dynamic-content");

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
        output.innerText = "Thanks. That has been noted.";
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
        output.innerText = "Thank you. Your memory is now archived.";
        break;
      case 18:
        document.getElementById("the-button").style.position = "absolute";
        document.getElementById("the-button").style.top = "70%";
        document.getElementById("the-button").style.left = "10%";
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
        break;
      case 23:
        output.innerText = "Smoothing contradictions...";
        break;
      case 24:
        document.getElementById("the-button").disabled = true;
        output.innerText = "Please wait...";
        setTimeout(() => {
          document.getElementById("the-button").disabled = false;
          output.innerText = "Resuming control... or are we?";
        }, 3000);
        break;
      case 25:
        output.innerText = "Almost complete.";
        break;
      case 26:
        document.body.innerHTML = "<h1 style='text-align:center'>You’ve been optimized.</h1>";
        break;
      default:
        document.body.innerHTML = "<h1 style='text-align:center'>The button is all that remains.</h1>";
        break;
        case 31:
  window.location.href = "credits.html";
  break;
    }
  });
});
