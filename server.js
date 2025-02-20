const express = require("express");
const cors = require("cors");
require("dotenv").config();

const ordersRoutes = require("./routes/orders");
const productsRoutes = require("./routes/products");
const guaranteesRoutes = require("./routes/guarantees");
const pricesRouter = require("./routes/prices");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/orders", ordersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/guarantees", guaranteesRoutes);
app.use("/api/prices", pricesRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));