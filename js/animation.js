// Slide In
const content = document.querySelectorAll(".about-container, .experience-container");

window.addEventListener("scroll", easeContent);
easeContent();

function easeContent() {
	const bottomOfPage = window.innerHeight * 0.9;

	content.forEach((contents) => {
		const topOfContent = contents.getBoundingClientRect().top;
		if (topOfContent < bottomOfPage) {
			contents.classList.add("appear")
		} else {
			contents.classList.remove("appear")
		}
	})
}

var slideIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > x.length) {
		slideIndex = 1
	}
	x[slideIndex-1].style.display = "block";
	setTimeout(carousel, 2000);
}
// End
