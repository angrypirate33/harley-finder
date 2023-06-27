const Motorcycle = require('../../models/motorcycle')

module.exports = {
    index
}

async function index(req, res) {
    try {
        const motorcycles = await Motorcycle.find()

        res.json(motorcycles)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}