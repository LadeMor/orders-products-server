const db = require("../config/db");

const Product = {
  getAll: (productType, specification, limit, offset) =>{
    return db.any(`SELECT 
       p.id AS product_id, 
       p.serial_number,
       p.is_new,
       p.photo,
       p.title, 
       p.order_id,
       p.date,
       o.title AS order_name,
       p.product_type,
       p.specification,
       json_agg( 
      DISTINCT jsonb_build_object(
      'id', pr.id, 
      'value', pr.value, 
      'symbol', pr.symbol,
        'is_default', pr.is_default)) AS prices,
      json_agg(
      DISTINCT jsonb_build_object(
      'id', g.id, 
      'start_date', g.start_date, 
      'end_date', g.end_date) ) AS guarantees,
      (SELECT COUNT(*) FROM products) AS total_products
      FROM products p
      LEFT JOIN orders o ON p.order_id = o.id
      LEFT JOIN prices pr ON p.id = pr.product_id
      LEFT JOIN guarantees g ON p.id = g.product_id
      WHERE 
        ($1 IS NULL OR p.product_type = $1) AND
        ($2 IS NULL OR p.specification = $2)
      GROUP BY p.id, o.title
       LIMIT $3 OFFSET $4;`,
      [productType || null, specification || null, limit, offset])},

  getByOrderId: (orderId, limit, offset) =>
    db.any(
      `SELECT 
      p.id AS product_id, 
       p.serial_number, 
       p.is_new,
       p.photo,
       p.title, 
      p.order_id,
      p.date,
      o.title AS order_name,
       p.product_type,
       p.specification,
       json_agg(
       DISTINCT jsonb_build_object(
       'id', pr.id, 
       'value', pr.value, 
       'symbol', pr.symbol, 
       'is_default', pr.is_default
       )
       ) AS prices, 
       json_agg(
       DISTINCT jsonb_build_object(
       'id', g.id, 
       'start_date', g.start_date, 
       'end_date', g.end_date )) AS guarantees ,
       (SELECT COUNT(*) FROM products) AS total_products
      FROM products p 
      LEFT JOIN orders o ON p.order_id = o.id
      LEFT JOIN prices pr ON p.id = pr.product_id 
      LEFT JOIN guarantees g ON p.id = g.product_id 
      WHERE p.order_id = $1 
      GROUP BY p.id, o.title
      LIMIT $2 OFFSET $3;`,
      [orderId, limit, offset]
    ),

    getFilters: () => {
      return db.any(`
                SELECT 
                ARRAY_AGG(DISTINCT product_type) AS product_types, 
                ARRAY_AGG(DISTINCT specification) AS specifications 
            FROM products
      `)
    }
};

module.exports = Product;
