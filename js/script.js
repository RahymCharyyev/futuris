let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let pathElement = button1.querySelector("path");
let pathElement2 = button2.querySelector("path");
let pathElement3 = button3.querySelector("path");
let pathElement4 = button4.querySelector("path");
button1.addEventListener("click", function () {
  button1.style.fill = "black";
  pathElement.setAttribute("stroke", "white");
  setTimeout(function () {
    button1.style.fill = "none";
    pathElement.setAttribute("stroke", "black");
  }, 100);
});
button2.addEventListener("click", function () {
  button2.style.fill = "black";
  pathElement2.setAttribute("stroke", "white");
  setTimeout(function () {
    button2.style.fill = "none";
    pathElement2.setAttribute("stroke", "black");
  }, 100);
});
button3.addEventListener("click", function () {
  button3.style.fill = "black";
  pathElement3.setAttribute("stroke", "white");
  setTimeout(function () {
    button3.style.fill = "none";
    pathElement3.setAttribute("stroke", "black");
  }, 100);
});
button4.addEventListener("click", function () {
  button4.style.fill = "black";
  pathElement4.setAttribute("stroke", "white");
  setTimeout(function () {
    button4.style.fill = "none";
    pathElement4.setAttribute("stroke", "black");
  }, 100);
});
