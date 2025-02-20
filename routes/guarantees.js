const express = require("express");
const router = express.Router();
const {getGuaranteesByProductId} = require("../controllers/guaranteesController");

router.get("/product/:productId", getGuaranteesByProductId);

module.exports = router;