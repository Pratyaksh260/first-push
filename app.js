let btn = document.querySelector("button");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
  console.log("color change");
  div.style.backgroundColor = rndmclr();
  h3.innerText = rndmclr();
});

let rndmclr = function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let clr = `rgb(${red},${green},${blue})`;
  return clr;
};
