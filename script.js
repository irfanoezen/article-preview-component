"use strict";

const popupContent = document.getElementById("article__popup");
const footerContent = document.getElementById("article__foot");
const shareButton = document.getElementById("share-btn");
const contentInfo = document.getElementById("article__content-info");

shareButton.addEventListener("click", () => {
  contentInfo.classList.toggle("active");
  popupContent.classList.toggle("active");
  shareButton.classList.toggle("btn-active");
  if(popupContent.classList.contains("active")) {
    footerContent.style.backgroundColor = "var(--grey-900)";
  } else {
    footerContent.style.backgroundColor = "#fff";
  }
});
