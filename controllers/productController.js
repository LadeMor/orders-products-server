const Product = require("../models/productModel");

exports.getProducts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const products = await Product.getAll(limit, offset);
    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getProductsByOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const products = await Product.getByOrderId(orderId, limit, offset);
    res.json(products);
  } catch (err) {
    next(err);
  }
};
