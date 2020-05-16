const thirdImage = document.querySelector('[src="img/third.jpg"]');
const fourthImage = document.querySelector('[src="img/fourth.jpg"]');
fourthImage.style.display = "none";
if (thirdImage.classList.contains("beautiful") === true) {
    thirdImage.style.display = "none";
    fourthImage.style.display = "block";
}