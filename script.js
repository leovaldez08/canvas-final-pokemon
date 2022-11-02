/* Iteration 4: Make the Everything Work */
const buttonbackround =document.getElementById("button-ground");
const backround =document.getElementById("ground");

buttonbackround.oninput = () => {
  backround.style.fill = buttonbackround.value
}

const buttonbody =document.getElementById("button-body");
const body =document.getElementById("body");

buttonbody.oninput = () => {
  body.style.fill = buttonbody.value
}

const buttonears =document.getElementById("button-ears");
const ears =document.getElementById("ears");

buttonears.oninput = () => {
  ears.style.fill = buttonears.value
}

const buttoncheeks =document.getElementById("button-cheeks");
const cheeks =document.getElementById("cheeks");

buttoncheeks.oninput = () => {
  cheeks.style.fill = buttoncheeks.value
}