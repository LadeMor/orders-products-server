const Order = require("../models/orderModel");

exports.getOrders = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const orders = await Order.getAll(limit, offset);
    res.json(orders);
  } catch (err) {
    next(err);
  }
};