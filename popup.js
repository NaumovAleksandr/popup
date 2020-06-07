document.addEventListener("click", function (event) {
  if (event.target.classList.contains("popup-show")) {
    const popupOpen = document.getElementById(
      event.target.getAttribute("data-popup")
    );
    const popupChild = popupOpen.querySelector(".popup");
    const popupContent = popupChild.innerHTML;

    popupChild.innerHTML = `<a class="popup__close" href="#"></a>${
      popupContent || ""
    }`;
    popupOpen.classList.add("popup-open");

    return false;
  } else if (event.target.classList.contains("popup__close")) {
    const parent = event.target.parentElement;
    const popupOpen = parent.parentElement;
    const popupClose = popupOpen.querySelector(".popup__close");

    popupOpen.classList.remove("popup-open");

    if (popupClose.parentNode) {
      popupClose.parentNode.removeChild(popupClose);
    }

    return false;
  }
});
