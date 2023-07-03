const express = require('express')
const router = express.Router()
const motorcyclesCtrl = require('../../controllers/api/motorcycles')

router.get('/models', motorcyclesCtrl.getUniqueModels)
router.get('/searchmodels', motorcyclesCtrl.searchModels)
router.post('/search', motorcyclesCtrl.search)
router.get('/', motorcyclesCtrl.index)
router.get('/:id', motorcyclesCtrl.show)

module.exports = router