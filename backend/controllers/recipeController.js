import Recipe from "../models/recipe.js";

export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi lấy danh sách công thức" });
  }
};

export const addRecipe = async (req, res) => {
  const { name, ingredients, steps } = req.body;
  if (!name || !ingredients || !steps) {
    return res.status(400).json({ error: "Vui lòng nhập đầy đủ thông tin!" });
  }

  try {
    const newRecipe = new Recipe({ name, ingredients, steps });
    await newRecipe.save();
    res.status(201).json({ message: "Thêm công thức thành công!" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi thêm công thức" });
  }
};

export const searchRecipes = async (req, res) => {
    try {
        const { name, ingredient } = req.query;
        let query = {};

        if (name) {
            query.name = { $regex: name, $options: "i" };
        }
        if (ingredient) {
            query.ingredients = { $regex: ingredient, $options: "i" };
        }

        const recipes = await Recipe.find(query);
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Lỗi tìm kiếm công thức!", error });
    }
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    await Recipe.findByIdAndDelete(id);
    res.json({ message: "Xóa công thức thành công!" });
  } catch (error) {
    res.status(500).json({ error: "Lỗi khi xóa công thức" });
  }
};
