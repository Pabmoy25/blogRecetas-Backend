import { Router } from "express";
import { crearReceta, listaRecetas } from "../controllers/recetas.controllers.js";

const router = Router();

router.route('/recetas').get(listaRecetas).post(crearReceta)


export default router