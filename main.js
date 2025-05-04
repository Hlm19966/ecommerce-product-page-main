const mobileMenu = document.getElementById("mobileMenu");
const iconMenu = document.getElementById("iconMenu");
const closeIcon = document.getElementById("closeIcon");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const mainImage = document.querySelector(".main-image");
const increaseBtn = document.querySelector(".increase-btn");
const decreaseBtn = document.querySelector(".decrease-btn");
const quantity = document.querySelector(".quantity");





/*next and previous button in mobile side*/ 

let currentIndex = 0;  

const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
];


function showImage(index) {
    mainImage.src = images[index];
}

nextBtn.addEventListener("click", ()=> {
    currentIndex = currentIndex + 1;
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    showImage(currentIndex);
});


prevBtn.addEventListener("click", ()=> {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});



/*mobile menu*/

iconMenu.addEventListener("click", ()=> {
    mobileMenu.classList.add('active');
});


closeIcon.addEventListener("click", ()=> {
    mobileMenu.classList.remove('active');
});


/*decrease increase btn*/ 

increaseBtn.addEventListener ("click", ()=> {
  let currentValue = parseInt(quantity.innerHtml);
  console.log(currentValue);
  
  currentValue.innerHtml =  currentValue + 1;
});