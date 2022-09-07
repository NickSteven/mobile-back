const express = require("express");
const router = express.Router();

const travailController = require("../controllers/travail_controller");

router.get("/", travailController.getAllTravails);
router.post("/", travailController.creerTravail);

module.exports = router;
