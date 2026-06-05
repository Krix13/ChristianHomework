function upDate(img) {

	const display = document.getElementById("image");
	
	display.style.backgroundImage = "url('" + img.src + "')";
	
	display.innerHTML = img.alt;
}

function unDo(img) {

	const display = document.getElementById("image");
	
	display.style.backgroundImage = "";
	
	display.innerHTML = "Hover over an image below to display here.";

}


