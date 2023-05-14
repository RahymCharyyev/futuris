let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let pathElement = button1.querySelector("path");
let pathElement2 = button2.querySelector("path");
let pathElement3 = button3.querySelector("path");
let pathElement4 = button4.querySelector("path");

function handleButton(button, pathElement) {
  button.addEventListener("click", function () {
    button.style.fill = "black";
    pathElement.setAttribute("stroke", "white");
    setTimeout(function () {
      button.style.fill = "none";
      pathElement.setAttribute("stroke", "black");
    }, 100);
  });
  button.addEventListener("mouseenter", function () {
    button.style.fill = "black";
    pathElement.setAttribute("stroke", "white");
  });
  button.addEventListener("mouseleave", function () {
    button.style.fill = "none";
    pathElement.setAttribute("stroke", "black");
  });
}

handleButton(button1, pathElement);
handleButton(button2, pathElement2);
handleButton(button3, pathElement3);
handleButton(button4, pathElement4);
