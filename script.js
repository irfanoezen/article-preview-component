"use strict";

const popupContent = document.getElementById("article__popup");
const footerContent = document.getElementById("article__foot");
const shareButton = document.getElementById("share-btn");
const contentInfo = document.getElementById("article__content-info");

function handleUI(isResize) {
  if (isResize) {
    // Logik für Fenster-Größenänderung (Reset)
    popupContent.classList.remove("active");
    shareButton.classList.remove("btn-active");
    contentInfo.classList.add("active");
    footerContent.style.backgroundColor = "#fff";
  } else {
    // Logik für den Klick-Event (Toggle)
    popupContent.classList.toggle("active");
    shareButton.classList.toggle("btn-active");
    contentInfo.classList.toggle("active");

    if (window.innerWidth < 768 && popupContent.classList.contains("active")) {
      footerContent.style.backgroundColor = "var(--grey-900)";
    } else {
      footerContent.style.backgroundColor = "#fff";
    }
  }
}
// Beide Event-Listener rufen dieselbe Funktion mit unterschiedlichem Argument auf
shareButton.addEventListener("click", () => handleUI(false));
window.addEventListener("resize", () => handleUI(true));

/*
const toggleStates = (isResize) => {
  const isActive = isResize ? false : popupContent.classList.toggle("active");

  // Bei Reset (Resize) Klassen entfernen, sonst togglen
  shareButton.classList.toggle("btn-active", isActive);
  contentInfo.classList.toggle("active", !isActive);
  if (isResize) popupContent.classList.remove("active");

  // Hintergrund-Logik
  const isMobile = window.innerWidth < 768;
  footerContent.style.backgroundColor = (isMobile && isActive) ? "var(--grey-900)" : "#fff";
};

// Beide Events nutzen dieselbe Logik
shareButton.addEventListener("click", () => toggleStates(false));
window.addEventListener("resize", () => toggleStates(true));
*/
