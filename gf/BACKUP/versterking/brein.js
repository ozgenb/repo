if ($(window).width() > 600) {
	function background() {
		const randomBg = Math.floor(Math.random() * 12);
		document.getElementById("header-boven").style.background = `url('piccas/${randomBg}.png') no-repeat center`;
		document.getElementById("header-boven").style.backgroundSize = "100%";
	}
}

function openMenu() {
	var hdrMnu = document.getElementById("headerMenu");
	if (hdrMnu.className === "header-menu") {
		hdrMnu.className += " responsive";
	} else {
		hdrMnu.className = "header-menu";
	}
}
 
