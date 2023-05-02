let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let pathElement = button1.querySelector("path");
let pathElement2 = button2.querySelector("path");
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
