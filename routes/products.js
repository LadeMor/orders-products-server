const express = require("express");
const router = express.Router();
const { getProducts, getProductsByOrder } = require("../controllers/productController");

router.get("/", getProducts);
router.get("/order/:orderId", getProductsByOrder);

module.exports = router;
