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

	cityLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		showSubMenu();
	});

	overlay.addEventListener("click", function(evt) {
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


	var accItems = document.querySelectorAll(".accordion__sub-item");
	var additionalInfo = document.querySelector(".additional-info");
	var closeBtn = additionalInfo.querySelector(".additional-info__close-btn");

	accItems = Array.prototype.slice.call(accItems);

	function showAdditionalInfo () {
		additionalInfo.classList.add("additional-info--show");
	}

	function hideAdditionalInfo () {
		additionalInfo.classList.remove("additional-info--show");
		accItems.forEach(function (accItem) {
			accItem.classList.remove("accordion__sub-item--active");
		})
	}



	accItems.forEach(function (accItem) {
		accItem.addEventListener("click", function () {
			if (accItem.classList.contains("accordion__group")) {
				accItem.classList.toggle("accordion__group--active");
			} else if (additionalInfo.classList.contains("additional-info--show")) {
				hideAdditionalInfo();
			} else {
				for (var n = 0; n < 8; n++) {
					if (additionalInfo.classList.contains("additional-info--" + n)) {
						additionalInfo.classList.remove("additional-info--" + n);
					}
				}
				additionalInfo.classList.add("additional-info--" + accItems.indexOf(accItem));
				accItem.classList.add("accordion__sub-item--active");
				showAdditionalInfo();
			}
		});
	});

	closeBtn.addEventListener("click", hideAdditionalInfo);

})();