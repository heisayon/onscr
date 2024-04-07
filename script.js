const display = document.getElementById("display");

// backspace functionality
function backspace() {
  let text = String(display.value);
  display.value = text.slice(0, -1);
  display.focus();
}

// display btns
let btns = document.querySelectorAll("button");
btns.forEach((element) => {
  if (
    element.textContent !== "CapsLock" &&
    element.textContent !== "Spacebar" &&
    element.textContent !== "Enter ↓"
  ) {
    if (element.id !== "backspace" && element.id !== "enter") {
      element.addEventListener("click", () => {
        display.value += element.textContent;
        display.focus();
      });
    }
  }
});

// capslock functionality
const CapsLock = document.getElementById("CapsLock");
CapsLock.addEventListener("click", () => {
  if (CapsLock.textContent === "CapsLock") {
    btns.forEach((element) => {
      if (
        element.textContent !== "CapsLock" &&
        element.textContent !== "Spacebar" &&
        element.textContent !== "Enter ↓"
      ) {
        element.textContent = element.textContent.toUpperCase();
        display.focus();
      }
    });
    CapsLock.textContent = "CapsLock on";
  } else if (CapsLock.textContent === "CapsLock on") {
    btns.forEach((element) => {
      if (
        element.textContent !== "CapsLock" &&
        element.textContent !== "Spacebar" &&
        element.textContent !== "Enter ↓"
      ) {
        element.textContent = element.textContent.toLowerCase();
        display.focus();
      }
    });
    CapsLock.textContent = "CapsLock";
  }
});

// Spacebar functionality
function spacebar() {
  display.value += " ";
  display.focus();
}

// Enter key functionality
const enter = () => {
  display.value += "\n";
  display.focus();
};

//hiding keyboard functinality
function hidesoftkeyboard() {
  display.blur();
}
hidesoftkeyboard();
display.addEventListener("focus", hidesoftkeyboard);
