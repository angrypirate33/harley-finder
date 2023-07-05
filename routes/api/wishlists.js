const express = require('express')
const router = express.Router()
const wishlistsCtrl = require('../../controllers/api/wishlists')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', wishlistsCtrl.getAll)
router.get('/:id', wishlistsCtrl.getOne)
router.post('/', ensureLoggedIn, wishlistsCtrl.create)
router.put('/:id', ensureLoggedIn, wishlistsCtrl.update)
router.post('/:id/motorcycles', ensureLoggedIn, wishlistsCtrl.addMotorcycle)
router.delete('/:id/motorcycles', ensureLoggedIn, wishlistsCtrl.removeMotorcycle)
router.delete('/:id', ensureLoggedIn, wishlistsCtrl.delete)

module.exports = router