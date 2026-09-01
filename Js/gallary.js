// Show Product

function showProduct(name, price) {

    document.getElementById("productName")
        .textContent = name;

    document.getElementById("productPrice")
        .textContent = price;

    document.getElementById("popup")
        .style.display = "flex";
}


// Close Product

function closeProduct() {

    document.getElementById("popup")
        .style.display = "none";
}


// Add to Cart

function addToCart() {

    alert("Product added to cart!");

}