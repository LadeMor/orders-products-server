const express = require("express");
const router = express.Router();
const { getProducts, getProductsByOrder, getProductsFilters } = require("../controllers/productController");

router.get("/", getProducts);
router.get("/order/:orderId", getProductsByOrder);
router.get("/filters", getProductsFilters);

module.exports = router;
