// Page Navigation
function showPage(pageId) {
    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

// Search Food in Home Page
document.addEventListener("DOMContentLoaded", function () {

    let searchBox = document.querySelector(".home input");

    searchBox.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card) {

            let foodName = card.querySelector("h2").innerText.toLowerCase();

            if (foodName.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

        if(value.length > 0){
            showPage("food");
        }
    });

});

// Food Menu Order Button Click
document.addEventListener("DOMContentLoaded", function () {

    let buttons = document.querySelectorAll(".btn");

    buttons.forEach(function(btn) {

        btn.addEventListener("click", function(e) {

            e.preventDefault();

            let foodName =
                this.parentElement.querySelector("h2").innerText;

            document.getElementById("foodname").value = foodName;

            showPage("order");
        });

    });

});

// Order Success
function orderFood() {

    let name = document.getElementById("name").value.trim();
    let food = document.getElementById("foodname").value.trim();
    let address = document.getElementById("address").value.trim();

    if (name === "" || food === "" || address === "") {

        alert("Please Fill All Fields");

        return;
    }

    alert(
        "🎉 Order Placed Successfully!\n\n" +
        "Name: " + name +
        "\nFood: " + food +
        "\nAddress: " + address
    );

    document.getElementById("name").value = "";
    document.getElementById("foodname").value = "";
    document.getElementById("address").value = "";

    showPage("home");
}