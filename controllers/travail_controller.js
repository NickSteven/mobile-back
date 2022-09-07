const pkg = require("@prisma/client");
const {PrismaClient} = pkg;
const prisma = new PrismaClient();
const {travail: Travail} = prisma;

// Récuperer tous les employes
const getAllTravails = async (req, res) => {
  Travail.findMany()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Une erreur est survenue lors du récupération des employés.",
      });
    });
};

// Créer un nouveau employe
const creerTravail = async (req, res) => {
  Travail.create({
    data: req.body,
  })
    .then(() => {
      res.status(201).send({
        message: "Heure de travail ajouté",
      });
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Une erreur est survenue lors du création du travail",
      });
    });
};

exports.getAllTravails = getAllTravails;
exports.creerTravail = creerTravail;
