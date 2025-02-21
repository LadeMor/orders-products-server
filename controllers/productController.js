const Product = require("../models/productModel");

exports.getProducts = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;
    const product_type = req.query.productType || null;
    const specification = req.query.specification || null;

    const products = await Product.getAll(product_type, specification, limit, offset);
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

exports.getProductsFilters = async (req, res, next) => {
  try{
    const filters = await Product.getFilters();
    if (!filters || filters.length === 0) {
      return res.status(200).json({ product_types: [], specifications: [] }); 
    }

    res.json(filters);
  }catch(err){
    next(err);
  }
}
