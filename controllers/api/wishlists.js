const Wishlist = require('../../models/wishlist')

module.exports = {
    getAll,
    getOne,
    create,
    update,
    delete: deleteWishlist
}

async function getAll(req, res) {
    try {
        const wishlists = await Wishlist.find()
        res.json(wishlists)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}

async function getOne(req, res) {
    try {
        const wishlist = await Wishlist.findById(req.params.id)
        if (!wishlist) {
            return res.status(404).json({ error: 'Wishlist not found' })
        }
        res.json(wishlist)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}

async function create(req, res) {
    try {
        const { name, description, motorcycles, public, createdBy } = req.body
        const wishlist = await Wishlist.create({
            name,
            description,
            motorcycles,
            public,
            createdBy
        })
        res.status(201).json(wishlist)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error'})
    }
}

async function update(req, res) {
    try {
        const { name, description, motorcycles, public, createdBy } = req.body
        const wishlist = await Wishlist.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                motorcycles,
                public,
                createdBy
            },
            { new: true }
        )
        if (!wishlist) {
            return res.status(404).json({ error: 'Wishlist not found' })
        }
        res.json(wishlist)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}

async function deleteWishlist(req, res) {
    try {
        const wishlist = await Wishlist.findByIdAndDelete(req.params.id)
        if (!wishlist) {
            return res.status(404).json({ error: 'Wishlist not found' })
        }
        res.sendStatus(204)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}