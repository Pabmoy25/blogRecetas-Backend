import { Router } from "express";
import { listaRecetas } from "../controllers/recetas.controllers.js";

const router = Router();

router.route('/recetas').get(listaRecetas)

export default router