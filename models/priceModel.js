const db = require("../config/db");

const Prices = {
    getByProductId: (productId) => 
        db.any(
            "SELECT * FROM prices WHERE product_id = $1",
            [productId]
        )
}

module.exports = Prices;