const express = require('express')
const router = express.Router()
const motorcyclesCtrl = require('../../controllers/api/motorcycles')

router.get('/', motorcyclesCtrl.index)

module.exports = router