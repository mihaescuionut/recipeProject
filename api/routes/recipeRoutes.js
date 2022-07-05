import express from "express";
import db from "../config/config.js";

const router = express.Router();

// get all Recipes from db

router.get("/allRecipes", async (req, res, next) => {
  try {
    let allRecipes = await db.models.Recipe.findAll();
    res.status(200).json(allRecipes);
  } catch (e) {
    throw new Error(e);
  }
});

router.put("/addToFav/:id", async (req, res, next) => {
  try {
    let user = req.body;
    let { id } = req.params;
    let obj = await db.models.Recipe.findByPk(id);
    if (obj) {
      obj.favourite = true;
    }

    await obj.save();
    res.status(200).json(obj);
  } catch (e) {
    throw new Error(e);
  }
});

router.get("/allFavorites", async (req, res, next) => {
  try {
    let favorites = await db.models.Recipe.findAll();
    let arr = [];
    favorites.forEach((e) => {
      if (e.favourite == true) {
        arr.push(e);
      }
    });
    res.status(200).json(arr);
  } catch (e) {
    throw new Error(e);
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let obj = await db.models.Recipe.findByPk(id);
    if (obj) {
      obj.favourite = false;
    }
    await obj.save();
    res.status(200).json(obj);
  } catch (e) {
    throw new Error(e);
  }
});

router.post("/createRecipe", async (req, res, next) => {
  try {
    let recipe = req.body;
    db.models.Recipe.create(recipe);
    console.log(book);
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
});

export default router;
