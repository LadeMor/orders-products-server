const db = require("../config/db");

const Order = {
  getAll: (limit, offset) => db.any(`SELECT 
                                      o.*, 
                                      COALESCE(SUM(CASE WHEN pr.symbol = 'UAH' THEN pr.value END), 0) AS total_price_uah,
                                      COALESCE(SUM(CASE WHEN pr.symbol = 'USD' THEN pr.value END), 0) AS total_price_usd,
                                      COUNT(DISTINCT p.order_id) AS product_count
                                      FROM orders o
                                      LEFT JOIN products p ON o.id = p.order_id
                                      LEFT JOIN prices pr ON p.id = pr.product_id
                                      GROUP BY o.id
                                      LIMIT $1 OFFSET $2`, [limit, offset]),
  getById: (id) => db.oneOrNone(`SELECT 
                                  o.*, 
                                  COALESCE(SUM(CASE WHEN pr.symbol = 'UAH' THEN pr.value END), 0) AS total_price_uah,
                                  COALESCE(SUM(CASE WHEN pr.symbol = 'USD' THEN pr.value END), 0) AS total_price_usd,
                                  COUNT(DISTINCT p.order_id) AS product_count
                                  FROM orders o
                                  LEFT JOIN products p ON o.id = p.order_id
                                  LEFT JOIN prices pr ON p.id = pr.product_id
                                  WHERE id = $1`, [id]),
};

module.exports = Order;
