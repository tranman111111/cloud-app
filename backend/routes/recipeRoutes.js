import express from "express";
import { getAllRecipes, addRecipe, searchRecipes, deleteRecipe } from "../controllers/recipeController.js";

const router = express.Router();

router.get("/all", getAllRecipes); 
router.post("/add", addRecipe);     
router.get("/search", searchRecipes); 
router.delete("/delete/:id", deleteRecipe);

export default router;
