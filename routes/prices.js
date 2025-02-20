const express = require("express");
const router = express.Router();
const {getPricesByProductId} = require("../controllers/priceController");

router.get("/product/:productId", getPricesByProductId);

module.exports = router