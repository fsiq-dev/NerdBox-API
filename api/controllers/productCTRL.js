const db = require('../models/models');

module.exports = {
    getAllProduct: async (req, res) => {
        const result = db.product.findAll({})
            .then((dataFromDb)=> {
                res.status(200).send(dataFromDb.map((item) =>{
                    return {
                        id: item.id,
                        category: item.category,
                        description: item.description,
                        price: item.price
                    }
                }));
            })
    }
}