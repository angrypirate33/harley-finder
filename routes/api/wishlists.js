const express = require('express')
const router = express.Router()
const wishlistsCtrl = require('../../controllers/api/wishlists')

router.get('/', wishlistsCtrl.getAll)
router.get('/:id', wishlistsCtrl.getOne)
router.post('/', wishlistsCtrl.create)
router.put('/:id', wishlistsCtrl.update)
router.delete('/:id', wishlistsCtrl.delete)

module.exports = router