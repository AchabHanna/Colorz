let navbarButton = document.querySelector(".navbar__button");

navbarButton.addEventListener("click", () => {
	let heroHeaderElements = document.querySelectorAll(
		".heroHeader__shoppingIcon, .heroHeader__logo, .heroHeader__line"
	);
	let navbarContainer = document.querySelector(".heroHeader__container");

	heroHeaderElements.forEach((element) => {
		element.classList.toggle("d-none");
	});
	navbarContainer.classList.toggle("heroHeader__container--isOpen");
});
