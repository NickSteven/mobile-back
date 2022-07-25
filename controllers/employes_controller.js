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

// Modifier un employe
const modifierEmploye = async (req, res) => {
    const { id } = req.params

    Employe.update({
        where: {
            numEmploye: parseInt(id)
        },
        data: req.body
    })
        .then(() => {
            res.status(200).send({
                message:'Employe modifié'
            })
        })
        .catch((error) =>{
            res.status(500).send({
                message: error.message || "Erreur lors du modification de l'employé"
            })
        })
}

// Supprimer un employe
const supprimerEmploye = async (req, res) => {
    const { id } = req.params

    Employe.delete({
        where: {
            numEmploye: parseInt(id)
        }
    })
        .then(() => {
            res.status(200).send({
                message: "Employé supprimé"
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || "Erreur lors du supression de l'employé"
            })
        })
}

exports.supprimerEmploye = supprimerEmploye;
exports.modifierEmploye = modifierEmploye;
exports.creerEmploye = creerEmploye;
exports.getEmployeById = getEmployeById;
exports.getAllEmployes = getAllEmployes;
