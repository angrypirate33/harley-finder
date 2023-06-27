const express = require('express')
const router = express.Router()
const wishlistsCtrl = require('../../controllers/api/wishlists')

router.get('/', wishlistsCtrl.index)

module.exports = router