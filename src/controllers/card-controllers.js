
const {fetchCards} = require('../models/card-models')

exports.getCards = (req, res, next) => {
    fetchCards().then((cards) => {
        res.status(200).send({cards})
    })
}