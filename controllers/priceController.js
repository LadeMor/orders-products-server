const Price = require("../models/priceModel");

exports.getPricesByProductId = async (req, res, next) => {
    try{
        const {productId} = req.params;
        if(!productId){
            throw Error("Product Id is missing!");
        }else{
            const prices = await Price.getByProductId(productId);
            res.json(prices);
        }
    }catch(err){
        next(err);
    }
}