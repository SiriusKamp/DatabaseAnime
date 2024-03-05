var express = require("express");
var router = express.Router();
var usuarioController = require("../controller/UsuarioController");
const multer = require("../config/multer");

router.get("/", usuarioController.list);
router.post("/", usuarioController.listFiltro);
router.get("/add", usuarioController.abreAdd);
router.post("/add", multer.single("foto"), usuarioController.add);
router.get("/edt/:id", usuarioController.abreEdt);
router.post("/edt/:id", multer.single("foto"), usuarioController.edt);
router.get("/del/:id", usuarioController.del);

module.exports = router;
