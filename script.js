const longBannerImageSlider = document.querySelector(".long-banner-img-slider");
const leftSliderButton = document.querySelector(".left-slide-btn ");
const rightSliderButton = document.querySelector(".right-slide-btn ");
let count = 1;

const topBannerImageArray = [
  "./images/top-banner/img1.png",
  "./images/top-banner/img2.png",
  "./images/top-banner/img3.png",
  "./images/top-banner/img4.png",
  "./images/top-banner/img5.png",
];

setInterval(() => {
  if (count < topBannerImageArray.length) {
    longBannerImageSlider.style.backgroundImage = `url(${topBannerImageArray[count]})`;
    count++;
  } else {
    count = 0;
    longBannerImageSlider.style.backgroundImage = `url(${topBannerImageArray[count]})`;
    count++;
  }
}, 2000);

leftSliderButton.addEventListener("click", () => {
  if (count > 0) {
    count--;
    longBannerImageSlider.style.backgroundImage = `url(${topBannerImageArray[count]})`;
  } else {
    count = topBannerImageArray.length - 1;
    longBannerImageSlider.style.backgroundImage = `url(${topBannerImageArray[count]})`;
  }
});

rightSliderButton.addEventListener("click", () => {
  if (count < topBannerImageArray.length - 1) {
    count++;
    longBannerImageSlider.style.backgroundImage = `url(${topBannerImageArray[count]})`;
  } else {
    count = 0;
    longBannerImageSlider.style.backgroundImage = `url(${topBannerImageArray[count]})`;
  }
});
