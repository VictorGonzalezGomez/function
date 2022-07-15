// function expression
let getSuma = function (a, b, c) {
  return a + b + c;
};
//arrow function
let suma = (a, b) => a + b;
//Changing the color background to yellow
if (document.getElementById("ele1") !== null) {
  document.getElementById("ele1").style.backgroundColor = "green";
  function pintar(element, color) {
    element.style.backgroundColor = color;
  }
  let ele = document.getElementById("ele1");
  let colorYellow = "yellow";
  ele.addEventListener("click", function () {
    pintar(ele, colorYellow);
  });
}
