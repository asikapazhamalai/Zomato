 const express = require("express");
const app = express();
const PORT = 3000;
// Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Static Folder
app.use(express.static("public"));


// FOOD DATA

const foods = [

    {
        id: 1,
        name: "Pizza",
        description: "Cheesy Italian Pizza",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
    },

    {
        id: 2,
        name: "Burger",
        description: "Hot Spicy Burger",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },

    {
        id: 3,
        name: "Biriyani",
        description: "Hyderabad Biriyani",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
    }

];


// CUSTOMER REVIEWS

const reviews = [

    {
        name: "Arun",
        rating: "⭐⭐⭐⭐⭐",
        message: "Very Tasty Food And Fast Delivery"
    },

    {
        name: "Priya",
        rating: "⭐⭐⭐⭐",
        message: "Amazing Experience And Beautiful Taste"
    },

    {
        name: "Vijay",
        rating: "⭐⭐⭐⭐⭐",
        message: "Best Restaurant Website Design"
    }

];


// HOME ROUTE

app.get("/", (req, res) => {

    res.send("Zomato Backend Running Successfully");

});


// FOOD API

app.get("/foods", (req, res) => {

    res.json(foods);

});


// REVIEW API

app.get("/reviews", (req, res) => {

    res.json(reviews);

});

// ORDER API

app.post("/order", (req, res) => {

    const { name, food, address } = req.body;

    res.json({

        message: "Order Placed Successfully",

        customerName: name,

        foodName: food,

        customerAddress: address

    });

});


// SERVER

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});