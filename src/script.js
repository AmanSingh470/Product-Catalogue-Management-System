const navbar = document.getElementById("navbar");
const heading = document.getElementById("main-heading");
const backImg = document.getElementById("back-img");
const headerAction = document.querySelectorAll(".header-action");
const headerLogo = document.getElementById("header-logo");
const gridListFloating = document.getElementById("grid-list-floating");
const heroSection = document.getElementById("hero-section");

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
    
    headerLogo.classList.remove("text-white");
    headerLogo.classList.add("text-red-500");

  } else {
    backImg.classList.remove("bg-black/60");
    backImg.classList.add("bg-black/80");
    
    navbar.classList.remove("bg-white", "shadow-lg");
    navbar.classList.add("bg-transparent");

    // back to white
    heading.classList.remove("text-red-500");
    heading.classList.add("text-white");

    headerAction.forEach(c => c.classList.add("hidden"));

    headerLogo.classList.remove("text-red-500");
    headerLogo.classList.add("text-white");
  }
  const heroBottom = heroSection.offsetHeight;
  if(window.scrollY > heroBottom-500){
    gridListFloating.classList.remove("hidden");
    gridListFloating.classList.add("block");
  }
  else{
    gridListFloating.classList.add("hidden");
    gridListFloating.classList.remove("block");
  }
});

const largeGridButton = document.getElementById("large-grid-button");
const largeListButton = document.getElementById("large-list-button");
const productGrid = document.getElementById("product-grid")
const productList = document.getElementById("product-list")

largeGridButton.addEventListener("click", () => {
  productList.classList.add("hidden");
  productGrid.classList.remove("hidden");

  largeGridButton.classList.remove('text-gray-500');
  largeGridButton.classList.add('text-black');

  largeListButton.classList.remove('text-black');
  largeListButton.classList.add('text-gray-500');
});
largeListButton.addEventListener("click", () => {
  productGrid.classList.add("hidden");
  productList.classList.remove("hidden");

  largeGridButton.classList.remove('text-black');
  largeGridButton.classList.add('text-gray-500');

  largeListButton.classList.remove('text-gray-500');
  largeListButton.classList.add('text-black');
});

const smallGridButton = document.getElementById("small-grid-btn");
const smallListButton = document.getElementById("small-list-btn");

smallGridButton.addEventListener("click", () => {
  productList.classList.add("hidden");
  productGrid.classList.remove("hidden");

  smallGridButton.classList.remove('text-gray-500');
  smallGridButton.classList.add('text-black');

  smallListButton.classList.remove('text-black');
  smallListButton.classList.add('text-gray-500');
});
smallListButton.addEventListener("click", () => {
  productGrid.classList.add("hidden");
  productList.classList.remove("hidden");
  
  smallGridButton.classList.remove('text-black');
  smallGridButton.classList.add('text-gray-500');

  smallListButton.classList.remove('text-gray-500');
  smallListButton.classList.add('text-black');
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

const largeFilterButtons = document.querySelectorAll(".large-filter-btn");
let filterContents = document.querySelectorAll(".filter-content");

largeFilterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    const target = btn.dataset.tab;

    // hide all content
    filterContents.forEach(c => c.classList.add("hidden"));

    // show selected content
    document.getElementById(target).classList.remove("hidden");

    // reset all buttons
    largeFilterButtons.forEach(b => {
      b.classList.remove("bg-black", "text-white");
      b.classList.add("bg-white", "text-gray-600");
    });

    // activate clicked button
    btn.classList.add("bg-black", "text-white");
    btn.classList.remove("bg-white", "text-gray-600");

  });
});

// ===== MODAL LOGIC (ONLY FOR SMALL DEVICES) =====
const smallfilterButtons = document.getElementsByClassName('.small-filter-buttons');
const smallFilterModal = document.getElementById("small-filter-modal");
const smallFilterModalContent = document.getElementById("small-filter-modal-content");
const smallFilterModalTitle = document.getElementById("small-filter-modal-title");
const smallFilterModalCloseBtn = document.getElementById("small-filter-modal-close-btn");

smallfilterButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // ONLY run modal on small screens
    if (window.innerWidth >= 1024) return; // lg breakpoint
    if(btn.dataset.tab == "all"){
      return;
    }
    const targetId = btn.dataset.tab;
    let filterContent = document.getElementById(targetId);

    smallFilterModalTitle.innerText = btn.innerText;
    smallFilterModalContent.innerHTML = filterContent.innerHTML;

    smallFilterModal.classList.remove("hidden");
    smallFilterModal.classList.add("flex");
  });
});

// close modal on cross
smallFilterModalCloseBtn.addEventListener("click", () => {
  smallFilterModal.classList.remove("flex");
  smallFilterModal.classList.add("hidden");
});

// show results button
const applyFiltersBtn = document.getElementById("apply-filters");
applyFiltersBtn.addEventListener("click", () => {
  smallFilterModal.classList.remove("flex");
  smallFilterModal.classList.add("hidden");
});
