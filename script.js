// toggle menu
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";
function menutoggle(){
    if( MenuItems.style.maxHeight == "0px"){
        MenuItems.style.maxHeight = "200px"
    }
    else{
        MenuItems.style.maxHeight = "0px"
    }
}

// JS for product gallery
var ProductImg = document.getElementById("ProductImg");
var SmallImag = document.getElementsByClassName("small-img");
SmallImag[0].onclick = function() {
    ProductImg.src = SmallImag[0].src;
}
SmallImag[1].onclick = function() {
    ProductImg.src = SmallImag[1].src;
}
SmallImag[2].onclick = function() {
    ProductImg.src = SmallImag[2].src;
}
SmallImag[3].onclick = function() {
    ProductImg.src = SmallImag[3].src;
}

