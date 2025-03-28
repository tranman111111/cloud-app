import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  steps: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
