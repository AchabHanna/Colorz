// slider

const slider = document.querySelector(".slider");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const sliderWidth = slider.scrollWidth - slider.clientWidth;
let scrollAmount = 0;

previous.addEventListener("click", () => {
	if (scrollAmount > 30) {
		next.classList.remove("d-none");
		scrollAmount = slider.scrollLeft -= 30;
	} else {
		previous.classList.add("d-none");
	}
});

next.addEventListener("click", () => {
	if (scrollAmount < sliderWidth) {
		previous.classList.remove("d-none");
		scrollAmount = slider.scrollLeft += 30;
	} else {
		next.classList.add("d-none");
	}
});

// carousel

const carouselItem = document.querySelectorAll(".carousel__item");

function screenWidth() {
	if (screen.width > 992) {
		carouselItem.forEach((element) => {
			element.classList.remove("carousel-item");
		});
	} else {
		carouselItem.forEach((element) => {
			element.classList.add("carousel-item");
		});
	}
}

screenWidth();

window.addEventListener("resize", () => {
	screenWidth();
});
