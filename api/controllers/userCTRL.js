const db = require('../models/models')
module.exports = {
    getAllUser: async (req, res) => {
        const result = db.user.findAll({})
            .then((dataFromDb) =>{
                res.status(200).send(dataFromDb.map((item)=>{
                    return {
                        id: item.id,
                        name: item.name,
                        email: item.email,
                        birth_date: item.birth_date
                    }
                }));
            })
    }
}