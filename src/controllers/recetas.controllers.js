import Receta from "../models/receta.js";

export const listarRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.status(200).json(recetas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al buscar las recetas" });
  }
};

export const crearReceta = async (req, res) => {
  try {
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({ mensaje: "La receta fue creada exitosamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "La receta no pudo ser creada" });
  }
};

export const obtenerRecetasAPI = async (req, res) => {
  try {
    console.log(req.params.id);
    const recetaBuscada = await Receta.findById(req.params.id);

    if (!recetaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "La receta con el id enviado no existe" });
    }

    res.status(200).json(recetaBuscada);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ mensaje: "No se puede encontrar la receta solicitada" });
  }
};

export const editarRecetasAPI = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id);
    if (!recetaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontra la receta con el id especificado" });
    }

    await Receta.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ mensaje: "La receta fue editada exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error no se pudo editar la receta" });
  }
};
