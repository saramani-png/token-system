const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/token", require("./routes/tokenRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/service", require("./routes/serviceRoutes"));

app.get("/", (req, res) => {
    res.send("Smart Queue System API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));