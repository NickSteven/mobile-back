const pkg = require("@prisma/client");
const {PrismaClient} = pkg;
const prisma = new PrismaClient();
const {entreprise: Entreprise} = prisma;

const getAllEntreprises = async (req, res) => {
  Entreprise.findMany()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Unne erreur est survenue lors de la récupération des employés",
      });
    });
};

const getEntrepriseById = async (req, res) => {
  const {id} = req.params;

  Entreprise.findUnique({
    where: {
      numEntreprise: parseInt(id),
    },
  })
    .then((data) => {
      res.status(500).send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Une erreur est survenue lors de la récupération de l'entreprise",
      });
    });
};

const creerEntreprise = async (req, res) => {
  Entreprise.create({
    data: req.body,
  })
    .then(() => {
      res.status(201).send({
        message: "Entreprise ajoutée",
      });
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Une erreur est survenue lors du création de l'entreprise",
      });
    });
};

const modifierEntreprise = async (req, res) => {
  const {id} = req.params;

  Entreprise.update({
    where: {
      numEntreprise: parseInt(id),
    },
    data: req.body,
  })
    .then(() => {
      res.status(200).send({
        message: "Entreprise modifiée",
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Erreur lors du modification de l'entreprise",
      });
    });
};

const supprimerEntreprise = async (req, res) => {
  const {id} = req.params;

  Entreprise.delete({
    where: {
      numEntreprise: parseInt(id),
    },
  })
    .then(() => {
      res.status(200).send({
        message: "Entreprise supprimée",
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: error.message || "Erreur lors du supression de l'entreprise",
      });
    });
};

exports.supprimerEntreprise = supprimerEntreprise;
exports.modifierEntreprise = modifierEntreprise;
exports.creerEntreprise = creerEntreprise;
exports.getEntrepriseById = getEntrepriseById;
exports.getAllEntreprises = getAllEntreprises;
