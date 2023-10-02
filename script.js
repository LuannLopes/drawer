function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);
  const max = Math.floor(document.querySelector(".input-max").value);

  const drawnNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  alert(drawnNumber);
}

const buttonDraw = document.querySelector(".button-draw");

buttonDraw.addEventListener("click", generateNumber);
