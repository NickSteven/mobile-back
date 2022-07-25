const express = require('express')
const router = express.Router()

const employeController = require('../controllers/employes_controller')

router.get('/', employeController.getAllEmployes)
router.get('/:id', employeController.getEmployeById)
router.post('/', employeController.creerEmploye)
router.put('/:id', employeController.modifierEmploye)
router.delete('/:id', employeController.supprimerEmploye)

module.exports = router