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

exports.getAllEmployes = getAllEmployes;
