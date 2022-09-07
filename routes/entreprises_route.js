const express = require("express");
const router = express.Router();

const entrepriseController = require("../controllers/entreprises_controller");

router.get("/", entrepriseController.getAllEntreprises);
router.get("/:id", entrepriseController.getEntrepriseById);
router.post("/", entrepriseController.creerEntreprise);
router.put("/:id", entrepriseController.modifierEntreprise);
router.delete("/:id", entrepriseController.supprimerEntreprise);

module.exports = router;
