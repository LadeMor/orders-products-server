const db = require("../config/db");

const Guarantees = {
    getByProductId: (productId) => 
        db.any(
            "SELECT * FROM guarantees WHERE product_id = $1",
            [productId]
        )
};

module.exports = Guarantees