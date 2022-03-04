const navbarButton = document.querySelector(".navbar__button");

navbarButton.addEventListener("click", () => {
	const heroHeaderElements = document.querySelectorAll(
		".heroHeader__shoppingIcon, .heroHeader__logo, .heroHeader__line"
	);
	const navbarContainer = document.querySelector(".heroHeader__container");

	heroHeaderElements.forEach((element) => {
		element.classList.toggle("d-none");
	});
	navbarContainer.classList.toggle("heroHeader__container--isOpen");
});
