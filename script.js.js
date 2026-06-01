function showPage(pageId) {
let pages = document.querySelectorAll('.page');

```
pages.forEach(function(page) {
    page.classList.remove('active');
});

document.getElementById(pageId).classList.add('active');
```

}

// Food Order Button Click
document.addEventListener("DOMContentLoaded", function () {

```
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
```

});

// Order Function
function orderFood() {

```
let name = document.getElementById("name").value.trim();
let food = document.getElementById("foodname").value.trim();
let address = document.getElementById("address").value.trim();

if (name === "" || food === "" || address === "") {

    alert("Please Fill All Fields");

    return;
}

alert(
    "🎉 Order Placed Successfully!\n\n" +
    "Name : " + name +
    "\nFood : " + food +
    "\nAddress : " + address
);

// Clear Fields
document.getElementById("name").value = "";
document.getElementById("foodname").value = "";
document.getElementById("address").value = "";

// Home Page Return
showPage("home");
```

}

// Search Food
function searchFood() {

```
let input =
    document.querySelector(".home input").value.toLowerCase();

let cards =
    document.querySelectorAll(".card");

cards.forEach(function(card) {

    let food =
        card.querySelector("h2").innerText.toLowerCase();

    if (food.includes(input)) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }

});
```

}

document.querySelector(".home input")
.addEventListener("keyup", searchFood);
