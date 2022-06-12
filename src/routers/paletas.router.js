import {
  findPaletasController,
  findPaletaByIdController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
} from "../controllers/paletas.controller.js";
import { validId } from "../middlewares/validId.middleware.js";
import { validObjectBody } from "../middlewares/validObjectBody.middleware.js";
import { validExistence } from "../middlewares/validExistence.middleware.js";
import { Router } from "express";

export const routerPaletas = Router();

routerPaletas.get("/find-paletas", validExistence, findPaletasController);
routerPaletas.get("/find-paleta/:id", validId, findPaletaByIdController);
routerPaletas.post("/create", validObjectBody, createPaletaController);
routerPaletas.put(
  "/update/:id",
  validId,
  validObjectBody,
  updatePaletaController
);
routerPaletas.delete("/delete/:id", validId, deletePaletaController);
