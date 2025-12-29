// CLICK EVENT
document.getElementById("clickBtn").addEventListener("click", () => {
  console.log("Button clicked");
});

// MOUSEOVER EVENT
const box = document.getElementById("hoverBox");

box.addEventListener("mouseover", () => {
  box.style.backgroundColor = "orange";
  console.log("Mouse over box");
});

// MOUSEOUT EVENT
box.addEventListener("mouseout", () => {
  box.style.backgroundColor = "lightblue";
  console.log("Mouse left box");
});

// KEYDOWN EVENT
document.getElementById("keyInput").addEventListener("keydown", e => {
  console.log("Key down:", e.key);
});

// KEYUP EVENT
document.getElementById("keyInput").addEventListener("keyup", () => {
  console.log("Key released");
});

// INPUT EVENT
document.getElementById("keyInput").addEventListener("input", e => {
  document.getElementById("output").innerText = e.target.value;
});

// FORM SUBMIT EVENT
document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault(); // stops page reload
  alert("Form submitted");
});

// FOCUS EVENT
document.getElementById("keyInput").addEventListener("focus", () => {
  console.log("Input focused");
});

// BLUR EVENT
document.getElementById("keyInput").addEventListener("blur", () => {
  console.log("Input lost focus");
});

// WINDOW LOAD EVENT
window.addEventListener("load", () => {
  console.log("Page fully loaded");
});

// WINDOW RESIZE EVENT
window.addEventListener("resize", () => {
  console.log("Window resized");
});

// SCROLL EVENT
window.addEventListener("scroll", () => {
  console.log("Page scrolled");
});
