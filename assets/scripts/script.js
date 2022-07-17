/**Navigation */

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");

if (menuLinks.length > 0) {
  menuLinks.forEach((element) => {
    element.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(event) {
    const menuLink = event.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector("header").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        iconMenu.classList.remove("_active");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}

//**menu-Burger***/

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
  iconMenu.addEventListener("click", (event) => {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

window.addEventListener("scroll", () => {
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
});
