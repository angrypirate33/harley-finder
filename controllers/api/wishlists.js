const wishlist = require('../../models/wishlist')
const Wishlist = require('../../models/wishlist')

module.exports = {
    getAll,
    getOne,
    create,
    update,
    delete: deleteWishlist,
    addMotorcycle
}

async function getAll(req, res) {
    try {
        const wishlists = await Wishlist.find({ user: req.user._id })
        res.json(wishlists)
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}

async function getOne(req, res) {
    try {
        const wishlist = await Wishlist.findById(req.params.id).populate('motorcycles')
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
        const { name, description, motorcycles, public: isPublic } = req.body
        const createdBy = req.user.name
        const userId = req.user._id

        const wishlist = await Wishlist.create({
            name,
            description,
            motorcycles,
            public: isPublic,
            user: userId,
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
        const { name, description, motorcycles, public: isPublic, createdBy } = req.body
        const wishlist = await Wishlist.findByIdAndUpdate(
            req.params.id,
            {
                name,
                description,
                motorcycles,
                public: Boolean(isPublic),
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
        res.json({ success: true })
    } catch(error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error' })
    }
}

async function addMotorcycle(req, res) {
    try {
        const { motorcycleId, wishlistId } = req.body
        const wishlist = await Wishlist.findById(wishlistId)
        wishlist.motorcycles.push(motorcycleId)
        await wishlist.save()

        res.json(wishlist)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Server Error'})
    }
}