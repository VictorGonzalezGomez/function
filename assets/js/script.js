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
//Changing the background color of a box whit clicking on them and selecting the color whit the keyboard
let selectedColor = "";
document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "a":
      selectedColor = "yellow";
      break;
    case "s":
      selectedColor = "red";
      break;
    case "d":
      selectedColor = "green";
      break;
    default: 
        alert("tecla seleccionada no posee color asociado utilia solo a, s, d"); 
        break;
  }
});

function paint(element, color) {
  element.style.backgroundColor = color;
}

document.querySelectorAll("div").forEach((element) => {
  element.addEventListener("click", (e) => {
    const id = e.target.getAttribute("id");
    paint(e.target, selectedColor);
  });
});
