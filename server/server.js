const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://routpratik09:9YWstddvC4OkwHYh@cluster0.at2gtsi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Middleware
app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use("/api", apiRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
