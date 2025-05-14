const mobileMenu = document.getElementById("mobileMenu");
const iconMenu = document.getElementById("iconMenu");
const closeIcon = document.getElementById("closeIcon");
const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");
const mainImage = document.querySelector(".main-image");
const increaseBtn = document.querySelector(".increase-btn");
const decreaseBtn = document.querySelector(".decrease-btn");
const quantity = document.querySelector(".quantity");
const quantityBtn = document.querySelector(".quantity-btn");
const cardBtn = document.querySelector(".card-btn");
const productNumber = document.querySelector(".product-number");
const cartSectionEmpty = document.getElementById("cartSection");
const cartSectionBuy = document.getElementById("cartSectionBuy");
const userNumber = document.getElementById("number");
const totallAmount = document.getElementById("totallAmount");
const iconDelete = document.querySelector(".icon-delete");
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImageDes = document.getElementById("mainImage");
const lightBox = document.getElementById("lightBox");
const iconClose = document.querySelector(".icon-close");
const lightboxImage = document.querySelector(".lightbox-main");



/*next and previous button in mobile and desktop side*/ 

let currentIndex = 0;  

const images = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
];


function showImage(index) {
    mainImage.src = images[index];
    lightboxImage.src = images[index];
}


nextBtns.forEach((nextBtn) => {
nextBtn.addEventListener("click", ()=> {
    currentIndex = currentIndex + 1;
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    showImage(currentIndex);
});
});

prevBtns.forEach((prevBtn) => {
prevBtn.addEventListener("click", ()=> {
    currentIndex = currentIndex - 1;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});
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
  let currentValue = parseInt(quantity.textContent) + 1;
  console.log(currentValue);
  quantity.innerHTML = currentValue;
});


decreaseBtn.addEventListener("click", ()=> {
    let currentValue = parseInt(quantity.textContent.trim()) - 1;
    if (currentValue > 0) { 
        quantity.innerHTML = currentValue;
    }
   
});

/*card btn*/ 

cardBtn.addEventListener("click", ()=> {
    function getQuantity() {
        let selectedQuantity = quantity.innerHTML;
        console.log(selectedQuantity);
    }
    getQuantity();
   productNumber.innerHTML =  quantity.innerHTML;
});


productNumber.addEventListener("click",()=> {
    let showCart = parseInt(quantity.innerHTML);
    console.log(showCart);
    if (showCart === 0) {
        cartSectionEmpty.style.display = "block";
    } else {
        cartSectionBuy.style.display = "block";
        userNumber.textContent =  quantity.innerHTML;
        totallAmount.textContent = `$${(Number(quantity.innerHTML) * 125).toFixed(2)}`;

    }
});

/*delete icon*/

iconDelete.addEventListener ("click", ()=> {
    cartSectionBuy.style.display = "none";
    productNumber.innerHTML = "";
    quantity.innerHTML = "0";
});



/*thnmbnail in desktop*/

thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", ()=> {
     thumbnails.forEach((thumb) => thumb.classList.remove("active"));
     thumb.classList.add("active");

     mainImageDes.src = thumb.src.replace("-thumbnail", "");
     lightboxImage.src = thumb.src.replace("-thumbnail","");
    });
    
})



 mainImageDes.addEventListener("click", ()=> {
    lightBox.classList.add("active");
});

iconClose.addEventListener("click", ()=> {
    lightBox.classList.remove("active");
});