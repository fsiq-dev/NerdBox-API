const caixaCTRL = require('../../controllers/caixaCTRL');

const { getAllBox, getBoxesById, postRegisterSubscription } = caixaCTRL

module.exports = (Router) => {
    Router
        .route('/caixas')
        .get(getAllBox)
    
    Router
        .route('/caixas/:id')
        .get(getBoxesById)
    
    Router
        .route('/caixas/:idCaixa/assinar')
        .post(postRegisterSubscription)
}