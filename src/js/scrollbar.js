let headingsContainer = document.querySelector(".headings__container");

headingsContainer.addEventListener("scroll", () => {
	const winScroll = headingsContainer.scrollLeft;
	const width = headingsContainer.scrollWidth - headingsContainer.clientWidth;
	const scrolled = (winScroll / width) * 100;
	const progressBar = document.getElementById("progressBar");
	progressBar.style.width = Math.round(scrolled) + "%";
});
