// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");

    const input = document.querySelector(".navbar-extra input");
    if (input.checked) {
      input.checked = false;
    }
  }
});

// elemen slider feature
const slider1 = document.querySelector(".feature-image");
const arrLeft1 = document.querySelector(".arr-left");
const arrRight1 = document.querySelector(".arr-right");

// Data slider
const images1 = ["ui1.png", "ui2.png", "ui3.png", "ui4.png", "ui5.png", "ui6.png", "ui7.png", "ui8.png", "ui9.png", "ui10.png"];

// Slider id
let id1 = 0;
function slide1(id1) {
  // Set background image
  slider1.style.backgroundImage = `url(img/${images1[id1]})`;
  // Add image fade animation
  slider1.classList.add("image-fade");
  // Remove animation
  setTimeout(() => {
    slider1.classList.remove("image-fade");
  }, 150);
}

// Add click event to left arrow
arrLeft1.addEventListener("click", () => {
  // Decrement img id
  id1--;
  // Check
  if (id1 < 0) {
    id1 = images1.length - 1;
  }
  // Run slide function
  slide1(id1);
});

// Add click event to right arrow
arrRight1.addEventListener("click", () => {
  // Increment img id
  id1++;
  // Check
  if (id1 > images1.length - 1) {
    // Change to first image
    id1 = 0;
  }
  // Run slide function
  slide1(id1);
});

// Elemen slider popular
const slider2 = document.querySelector(".image-slider");
const arrLeft2 = document.querySelector(".arrow-left");
const arrRight2 = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");

// Data slider
const images2 = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const headings = ["The Beginning After The End", "Solo Leveling", "Sword Art Online", "Mushoku Tensei: Jobless Reincarnation", "Tensei Shitara Slime Datta Ken", "Omniscient Reader's Viewpoint"];

// Slider id
let id2 = 0;
function slide2(id2) {
  // Set background image
  slider2.style.backgroundImage = `url(img/${images2[id2]})`;
  // Add image fade animation
  slider2.classList.add("image-fade");
  // Remove animation
  setTimeout(() => {
    slider2.classList.remove("image-fade");
  }, 150);
  // Change heading
  heading.innerText = headings[id2];
}

// Add click event to left arrow
arrLeft2.addEventListener("click", () => {
  // Decrement img id
  id2--;
  // Check
  if (id2 < 0) {
    id2 = images2.length - 1;
  }
  // Run slide function
  slide2(id2);
});

// Add click event to right arrow
arrRight2.addEventListener("click", () => {
  // Increment img id
  id2++;
  // Check
  if (id2 > images2.length - 1) {
    // Change to first image
    id2 = 0;
  }
  // Run slide function
  slide2(id2);
});
