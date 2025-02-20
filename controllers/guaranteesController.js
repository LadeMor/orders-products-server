const Guarantees = require("../models/guaranteesModel");

exports.getGuaranteesByProductId = async (req, res, next) => {
    try{
        const {productId} = req.params;
        console.log(req.params);
        if(!productId){
            throw Error("Product id is missing");
        }else{
            const guarantees = await Guarantees.getByProductId(productId);
            res.json(guarantees);
        }
    }catch(err){
        next(err);
    }
}