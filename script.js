menu.onclick = function myFunction() {
	var x = document.getElementById('myTopnav');

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

function slowScroll(id) {
	var offset = 0;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 1000);
	return false;

}

