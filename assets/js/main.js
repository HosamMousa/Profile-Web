let up = document.querySelector(".to_up");
let sections = document.querySelectorAll("section");
let links = document.querySelectorAll(".left_aside ul li");

window.onscroll = function () {
  let current = "";
  sections.forEach((section) => {
    if (pageYOffset >= section.offsetTop) {
      current = section.getAttribute("id");
    }
  });
  console.log(current);

  links.forEach((link) => {
    if (link.classList.contains(current)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  window.scrollY >= 800
    ? up.classList.add("show")
    : up.classList.remove("show");
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

// Start Nav

const navToggle = document.querySelector(".nav");
openMenu = function () {
  if (window.innerWidth <= 991.98) {
    navToggle.onclick = function () {
      document.body.classList.toggle("open-menu");
    };

    links.forEach((link) => {
      link.onclick = function () {
        document.body.classList.toggle("open-menu");
      };
    });
  }
};
openMenu();

window.onresize = function () {
  openMenu();
};

// Dark-Mode

let darkMode = localStorage.getItem("darkMode");
let darkModeToggle = document.querySelector("#icon");

const enableDarkMode = () => {
  document.body.classList.add("dark_theme");
  localStorage.setItem("darkMode", "dark_theme");
  icon.className = "fas fa-sun";
};

const disableDarkMode = () => {
  document.body.classList.remove("dark_theme");
  localStorage.setItem("darkMode", null);
  icon.className = "far fa-sun";
};

if (darkMode === "dark_theme") {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !== "dark_theme") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// *******************************

let landPage = document.querySelector(".hero-section");

let imgArray = ["1.jpg", "2.jpg", "hero.jpg"];

setInterval(() => {
  let randomNum = Math.floor(Math.random() * imgArray.length);

  landPage.style.backgroundImage =
    'url("../../assets/Images/' + imgArray[randomNum] + '")';
}, 4000); 




