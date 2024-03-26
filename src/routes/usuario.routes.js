import { Router } from "express";
import { crearUsuario, listarUsuarios } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route('/usuarios').get(listarUsuarios).post(crearUsuario)

export default router


