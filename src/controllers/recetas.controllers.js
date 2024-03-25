import Receta from "../models/receta.js"

export const listaRecetas = (req,res)=>{
    res.send('enviando ')
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