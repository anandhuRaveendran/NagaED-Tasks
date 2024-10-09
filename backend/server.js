const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contact = require("./models/contact")
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
mongoose.connect("mongodb://localhost:27017/nagaEDcontact");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});



app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
    
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const result = await contact.create({name,email,message});
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// Start the server

