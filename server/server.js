const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const axios = require("axios");

const User = require('./model/Users'); 

const app = express();
app.use(cors());
app.use(express.json()); 

// console.log("User Model" ,User);

mongoose.connect("mongodb://127.0.0.1:27017/BuyBuddy");

app.post('/register', async (req, res) => {
    try {
        
        req.body.phonenumber = Number(req.body.phonenumber);
        
        const newUser = await User.create(req.body); 
        res.json(newUser);
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ error: err.message });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("User not found");
        }
        if (user.password !== password) {
            return res.status(400).json("Invalid credentials");
        }

        res.json("success");  
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ error: err.message });
    }
});

  
app.post("/api/chat", async (req, res) => {
    try {
        const userMessage = req.body.message;
        if (!userMessage) {
            return res.status(400).json({ error: "Message is required" });
        }

        
        const response = await axios.post("http://localhost:1234/v1/chat/completions", {
            model: "meta-llama-3.1-8b-instruct",
            messages: [{ role: "user", content: userMessage }]
        });

        res.json({ message: response.data.choices[0].message.content });
    } catch (error) {
        console.error("Error communicating with LM Studio:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(5000, () => console.log("Server is running on http://localhost:5000"));
