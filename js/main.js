// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
// 	acc[i].onclick = function(){
// 		this.classList.toggle("accordion--active");
// 		// this.nextElementSibling.classList.toggle("show");
// 		this.elementsToShow = Array.prototype.slice.call(this.children);
// 		this.elementsToShow.forEach(function (elementToShow) {
// 			elementToShow.classList.toggle("accordion__sub--show");
// 		});
// 		// this.children.classList.toggle("show");
// 	}
// }

"use strict";

(function () {
	var cityLink = document.getElementById("city-link");
	var overlay = document.querySelector(".overlay");
	var subMenu = document.querySelector(".sub-menu");

	function showSubMenu() {
		overlay.classList.add("overlay--show");
		subMenu.classList.add("sub-menu--show");
	}

	function hideSubMenu() {
		overlay.classList.remove("overlay--show");
		subMenu.classList.remove("sub-menu--show");
	}

	cityLink.addEventListener('click', function(evt) {
		evt.preventDefault();
		showSubMenu();
	});

	overlay.addEventListener('click', function(evt) {
		evt.preventDefault();
		hideSubMenu();
	});



	var acc = document.getElementsByClassName("accordion__group");
	var i;

	for (i = 0; i < acc.length; i++) {
		acc[i].onclick = function(){
			this.classList.toggle("accordion__group--active");
			this.nextElementSibling.classList.toggle("accordion__sub--show");
		}
	}
})();
