const express = require('express')
const router = express.Router()
const motorcyclesCtrl = require('../../controllers/api/motorcycles')

router.get('/models', motorcyclesCtrl.getUniqueModels)
router.get('/', motorcyclesCtrl.index)
router.get('/:id', motorcyclesCtrl.show)

module.exports = router