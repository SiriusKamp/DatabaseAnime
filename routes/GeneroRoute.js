var express = require("express");
var router = express.Router();
var generoController = require("../controller/GeneroController");

router.get("/", generoController.list);
router.post("/", generoController.listFiltro);
router.get("/add", generoController.abreAdd);
router.post("/add", generoController.add);
router.get("/edt/:id", generoController.abreEdt);
router.post("/edt/:id", generoController.edt);
router.get("/del/:id", generoController.del);

module.exports = router;