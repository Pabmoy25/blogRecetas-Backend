import { Router } from "express";
import { listarRecetas } from "../controllers/recetas.controllers";

const router = Router();

router.route('/usuarios').get(listarRecetas)

export default router