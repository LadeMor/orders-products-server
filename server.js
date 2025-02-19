const express = require("express");
const cors = require("cors");
require("dotenv").config();

const ordersRoutes = require("./routes/orders");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/orders", ordersRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));