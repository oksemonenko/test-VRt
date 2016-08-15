"use strict";

(function () {
//Подменю выбора города
	var cityLink = document.getElementById("city-link");
	var overlay = document.querySelector(".overlay");
	var subMenu = document.querySelector(".sub-menu");

	//Функции показа и скрытия подменю
	function showSubMenu() {
		overlay.classList.add("overlay--show");
		subMenu.classList.add("sub-menu--show");
	}

	function hideSubMenu() {
		overlay.classList.remove("overlay--show");
		subMenu.classList.remove("sub-menu--show");
	}

	//Обработчики событий показа и закрытия подменю
	cityLink.addEventListener("click", function(evt) {
		evt.preventDefault();
		showSubMenu();
	});

	overlay.addEventListener("click", function(evt) {
		evt.preventDefault();
		hideSubMenu();
	});


//Аккордеон-меню
	var accGroup = document.getElementsByClassName("accordion__group");
	var i;

	//Показывает и скрывает пункты аккордеон-меню по клику на аккордеон-группу
	for (i = 0; i < accGroup.length; i++) {
		accGroup[i].addEventListener("click", function(){
			this.classList.toggle("accordion__group--active");
			this.nextElementSibling.classList.toggle("accordion__sub--show");
		})
	}


//Окошко дополнительной информации
	var accItems = document.querySelectorAll(".accordion__sub-item");
	var additionalInfo = document.querySelector(".additional-info");
	var closeBtn = additionalInfo.querySelector(".additional-info__close-btn");

	accItems = Array.prototype.slice.call(accItems);

	//Функции показа и скрытия окошка дополнительной информации
	function showAdditionalInfo () {
		additionalInfo.classList.add("additional-info--show");
	}

	function hideAdditionalInfo () {
		additionalInfo.classList.remove("additional-info--show");
		accItems.forEach(function (accItem) {
			accItem.classList.remove("accordion__sub-item--active");
		})
	}

	//Обработчики событий показа и скрытия окошка дополнительной информации
	accItems.forEach(function (accItem) {
		accItem.addEventListener("click", function () {
			if (accItem.classList.contains("accordion__group")) {
				hideAdditionalInfo();
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
