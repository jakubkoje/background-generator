var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

function setGradient() {
	body.style.background =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background;
}

function setRandomGradient() {
	var col1 =
		"#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
	var col2 =
		"#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

	body.style.background = "linear-gradient(to right, " + col1 + ", " + col2;
	css.textContent = body.style.background;
	color1.value = col1;
	color2.value = col2;
}

random.addEventListener("click", setRandomGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

window.onload = setRandomGradient;
