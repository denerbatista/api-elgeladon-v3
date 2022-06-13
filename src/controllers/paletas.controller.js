import {
  findPaletasService,
  findPaletaByIdService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
} from '../services/paletas.service.js';

export const findPaletasController = async (req, res) => {
  const allPaletas = await findPaletasService();
  res.status(200).send(allPaletas);
};

export const findPaletaByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = await findPaletaByIdService(idParam);
  if (!chosenPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }
  res.status(200).send(chosenPaleta);
};

export const createPaletaController = async (req, res) => {
  const { sabor, descricao, foto, preco } = req.body;
  const newPaleta = await createPaletaService(sabor, descricao, foto, preco);
  return res.status(200).send(newPaleta);
};

export const updatePaletaController = async (req, res) => {
  const { id } = req.params;
  const { sabor, descricao, foto, preco } = req.body;
  const updatedPaleta = await updatePaletaService({
    id,
    sabor,
    descricao,
    foto,
    preco
  });
  res.status(200).send(updatedPaleta);
};

export const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  await deletePaletaService(idParam);
  res.status(200).send({ message: 'Paleta deletada com sucesso!' });
};
