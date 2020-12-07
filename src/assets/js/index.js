const navMain = document.querySelector(".nav--main");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
	navMain.classList.toggle("hidden");
	navMain.classList.toggle("opacity-100");
	hamburger.classList.toggle("is-active");
});
