import { Router } from "express";
import { crearReceta, listarRecetas, obtenerRecetasAPI } from "../controllers/recetas.controllers.js";

const router = Router();

router.route('/recetas').get(listarRecetas).post(crearReceta)
router.route('/recetas/:id').get(obtenerRecetasAPI)

export default router