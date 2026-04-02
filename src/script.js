const navbar = document.getElementById("navbar");
const heading = document.getElementById("main-heading");
const backImg = document.getElementById("back-img");
const headerAction = document.querySelectorAll(".header-action");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    navbar.classList.add("bg-white", "shadow-lg");
    navbar.classList.remove("bg-transparent");

    // change heading to red
    heading.classList.add("text-red-500");
    heading.classList.remove("text-white");
    
    backImg.classList.remove("bg-black/80");
    backImg.classList.add("bg-black/60");
    
    headerAction.forEach(c => c.classList.remove("hidden"));

  } else {
    backImg.classList.remove("bg-black/60");
    backImg.classList.add("bg-black/80");
    
    navbar.classList.remove("bg-white", "shadow-lg");
    navbar.classList.add("bg-transparent");

    // back to white
    heading.classList.remove("text-red-500");
    heading.classList.add("text-white");

    headerAction.forEach(c => c.classList.add("hidden"));

  }
});

const gridButton = document.getElementById("grid-button");
const listButton = document.getElementById("list-button");
const productGrid = document.getElementById("product-grid")
const productList = document.getElementById("product-list")

gridButton.addEventListener("click", () => {
  productList.classList.add("hidden");
  productGrid.classList.remove("hidden");

  gridButton.classList.remove('text-gray-500');
  gridButton.classList.add('text-black');

  listButton.classList.remove('text-black');
  listButton.classList.add('text-gray-500');
});
listButton.addEventListener("click", () => {
  productGrid.classList.add("hidden");
  productList.classList.remove("hidden");

  listButton.classList.remove('text-gray-500');
  listButton.classList.add('text-black');

  gridButton.classList.remove('text-black');
  gridButton.classList.add('text-gray-500');
});

const searchInput = document.getElementById("searchInput");
const items = document.querySelectorAll(".product-item");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  items.forEach(item => {
    const text = item.innerText.toLowerCase();

    if (text.includes(value)) {
      item.classList.remove("hidden"); // show
    } else {
      item.classList.add("hidden"); // hide
    }
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const contents = document.querySelectorAll(".filter-content");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    const target = btn.dataset.tab;

    // hide all content
    contents.forEach(c => c.classList.add("hidden"));

    // show selected content
    document.getElementById(target).classList.remove("hidden");

    // reset all buttons
    filterButtons.forEach(b => {
      b.classList.remove("bg-black", "text-white");
      b.classList.add("bg-white", "text-gray-600");
    });

    // activate clicked button
    btn.classList.add("bg-black", "text-white");
    btn.classList.remove("bg-white", "text-gray-600");

  });
});
