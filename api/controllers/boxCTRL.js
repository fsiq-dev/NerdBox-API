const db = require('../models/models');

module.exports = {
    getAllBox: async (req, res) => {
        const result = db.box.findAll({})
            .then((dataFromDb)=> {
                res.status(200).send(dataFromDb.map((item) =>{
                    return {
                        id: item.id,
                        name: item.category,
                        description: item.description,
                        price: item.price
                    }
                }));
            })
    },
    getBoxById: async (req,res) => {
        const result = db.box.findOne({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.status(200).send(result)
        })
    }
}
