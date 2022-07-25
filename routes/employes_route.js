const express = require('express')
const router = express.Router()

const employeController = require('../controllers/employes_controller')

router.get('/', employeController.getAllEmployes)
router.get('/:id', employeController.getEmployeById)
router.post('/', employeController.creerEmploye)

module.exports = router