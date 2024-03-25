import Receta from "../models/receta.js"

export const listarRecetas = async(req,res)=>{
    try {
        const recetas = await Receta.find()
        res.status(200).json(recetas)
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: "Error al buscar las recetas"})
    }
    
    }

export const crearReceta = async (req, res)=>{
try {
    const recetaNueva = new Receta(req.body)
    await recetaNueva.save()
    res.status(201).json({mensaje:'La receta fue creada exitosamente'})
} catch (error) {
    console.log(error)
    res.status(400).json({mensaje:'La receta no pudo ser creada'})
}
}