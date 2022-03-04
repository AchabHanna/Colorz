// slider

const slider = document.querySelector(".slider");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const sliderButtonLeft = document.querySelector(".slider__button--left");
const sliderButtonRight = document.querySelector(".slider__button--right");
const sliderWidth = slider.scrollWidth - slider.clientWidth;
let scrollAmount = 0;

previous.addEventListener("click", () => {
	if (scrollAmount > 30) {
		sliderButtonRight.classList.remove("d-none");
		scrollAmount = slider.scrollLeft -= 30;
	} else {
		sliderButtonLeft.classList.add("d-none");
	}
	console.log("scrollAmount = " + scrollAmount, "sliderWidth =" + sliderWidth);
});

next.addEventListener("click", () => {
	if (scrollAmount < sliderWidth) {
		sliderButtonLeft.classList.remove("d-none");
		scrollAmount = slider.scrollLeft += 30;
	} else {
		sliderButtonRight.classList.add("d-none");
	}
	console.log("scrollAmount = " + scrollAmount, "sliderWidth =" + sliderWidth);
});

// carousel

const carouselItem = document.querySelectorAll(".carousel__item");

if (screen.width > 992) {
	carouselItem.forEach((element) => {
		element.classList.remove("carousel-item");
	});
} else {
	carouselItem.forEach((element) => {
		element.classList.add("carousel-item");
	});
}

window.addEventListener("resize", () => {
	screenWidth();
});

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
