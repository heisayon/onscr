const display = document.getElementById("display");
//backspace functionality
function backspace() {
  let text = String(display.value);
  display.value = text.slice(0, -1);
}
//display btns
let btns = document.querySelectorAll("button");
btns.forEach((element) => {
  if (
    element.textContent !== "backspace" &&
    element.textContent !== "CapsLock" &&
    element.textContent !== "Spacebar"
  ) {
    element.addEventListener("click", () => {
      display.value += element.textContent;
    });
  }
});
//capslock functionality
const CapsLock = document.getElementById("CapsLock");
CapsLock.addEventListener("click", () => {
  if (CapsLock.textContent === "CapsLock") {
    btns.forEach((element) => {
      if (
        element.textContent !== "backspace" &&
        element.textContent !== "CapsLock" &&
        element.textContent !== "Spacebar"
      ) {
        element.textContent = element.textContent.toUpperCase();
      }
    });
    CapsLock.textContent = "CapsLock on";
  } else if (CapsLock.textContent === "CapsLock on") {
    btns.forEach((element) => {
      if (
        element.textContent !== "backspace" &&
        element.textContent !== "CapsLock" &&
        element.textContent !== "Spacebar"
      ) {
        element.textContent = element.textContent.toLowerCase();
      }
    });
    CapsLock.textContent = "CapsLock";
  }
});
//Spacebar functionality
function spacebar() {
  display.value += " ";
}


