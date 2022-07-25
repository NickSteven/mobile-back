const pkg = require('@prisma/client')
const { PrismaClient } = pkg
const prisma = new PrismaClient()
const { employe : Employe } = prisma

// Récuperer tous les employes
const getAllEmployes = async (req, res) => {
    Employe.findMany()
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Une erreur est survenue lors du récupération des employés.'
            })
        })
}

// Récuperer un employé via son id
const getEmployeById = async (req, res) => {
    const { id } = req.params

    Employe.findUnique({
        where: {
            numEmploye: parseInt(id),
        },
    })
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Une erreur est survenue lors du récupération de l\'employé.'
            })
        })
}

// Créer un nouveau employe
const creerEmploye = async (req, res) => {

    Employe.create({
        data: req.body
    })
        .then(() => {
            res.status(201).send({
                message:'Employé ajouté',
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || 'Une erreur est survenue lors du création de l\'employe',
            })
        })
}

exports.creerEmploye = creerEmploye;
exports.getEmployeById = getEmployeById;
exports.getAllEmployes = getAllEmployes;
