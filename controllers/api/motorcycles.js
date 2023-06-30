const Motorcycle = require('../../models/motorcycle')

module.exports = {
    index,
    show,
    getUniqueModels
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

async function show(req, res) {
    try {
        const motorcycle = await Motorcycle.findById(req.params.id)
        if (!motorcycle) {
            return res.status(404).json({ error: 'Motorcycle not found' })
        }
        res.json(motorcycle)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}

async function getUniqueModels(req, res) {
    try {
        const uniqueModels = await Motorcycle.distinct('model')
        res.json(uniqueModels)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}