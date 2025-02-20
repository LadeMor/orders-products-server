const db = require("../config/db");

const Product = {
  getAll: (limit, offset) =>
    db.any("SELECT " +
      " p.id AS product_id, " +
      " p.serial_number," +
      " p.is_new," +
      " p.photo," +
      " p.title, " +
      " p.order_id," +
      " p.product_type," +
      " p.specification," +
      " json_agg(" +  
      " DISTINCT jsonb_build_object(" +
      " 'id', pr.id, " +
      " 'value', pr.value, " +
      " 'symbol', pr.symbol," +
      " 'is_default', pr.is_default" +
      " )" +
      " ) AS prices," +
      " json_agg(" +
      " DISTINCT jsonb_build_object(" +
      "'id', g.id, " +
      "'start_date', g.start_date, " +
      "'end_date', g.end_date" +
      " ) " +
      ") AS guarantees" +
      " FROM products p" +
      " LEFT JOIN prices pr ON p.id = pr.product_id" +
      " LEFT JOIN guarantees g ON p.id = g.product_id" +
      " GROUP BY p.id" +
      " LIMIT $1 OFFSET $2;",
      [limit, offset]),

  getByOrderId: (orderId, limit, offset) =>
    db.any(
      "SELECT " +
      " p.id AS product_id, " +
      " p.serial_number, " +
      " p.is_new," +
      " p.photo," +
      " p.title, " +
      " p.order_id," +
      " p.product_type," +
      " p.specification," +
      " json_agg(" + 
      " DISTINCT jsonb_build_object(" +
      " 'id', pr.id, " +
      " 'value', pr.value, " +
      " 'symbol', pr.symbol, " +
      " 'is_default', pr.is_default" +
      " )" +
      " ) AS prices, " +
      " json_agg(" +
      " DISTINCT jsonb_build_object(" +
      " 'id', g.id, " +
      " 'start_date', g.start_date, " +
      " 'end_date', g.end_date" +
      " )" +
      " ) AS guarantees " +
      " FROM products p " +
      " LEFT JOIN prices pr ON p.id = pr.product_id " +
      " LEFT JOIN guarantees g ON p.id = g.product_id " +
      " WHERE p.order_id = $1 " +
      " GROUP BY p.id " +
      " LIMIT $2 OFFSET $3;",
      [orderId, limit, offset]
    ),
};

module.exports = Product;
