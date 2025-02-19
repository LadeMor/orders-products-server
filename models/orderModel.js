const db = require("../config/db");

const Order = {
  getAll: (limit, offset) => db.any("SELECT * FROM orders LIMIT $1 OFFSET $2", [limit, offset]),
  getById: (id) => db.oneOrNone("SELECT * FROM orders WHERE id = $1", [id]),
};

module.exports = Order;
