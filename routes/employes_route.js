const express = require('express')
const router = express.Router()

const employeController = require('../controllers/employes_controller')

router.get('/', employeController.getAllEmployes)