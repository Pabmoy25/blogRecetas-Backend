import { Router } from "express";
import { borrarRecetaAPI, crearReceta, editarRecetasAPI, listarRecetas, obtenerRecetasAPI } from "../controllers/recetas.controllers.js";

const router = Router();

router.route('/recetas').get(listarRecetas).post(crearReceta)
router.route('/recetas/:id').get(obtenerRecetasAPI).put(editarRecetasAPI).delete(borrarRecetaAPI)

export default router