class MobileNavbar {
  constructor(menuHamburger, navList, navLinks) {
    this.menuHamburger = document.querySelector(menuHamburger);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.menuHamburger.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.menuHamburger.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.menuHamburger) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".menu-hamburger",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();
