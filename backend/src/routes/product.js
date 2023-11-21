const express = require("express");
const productSchema = require("../models/product");
const crudUtils = require("./crudUtils");

const router = express.Router();

// Crear un producto
router.post("/product", (req, res) => {
  crudUtils.createItem(productSchema, req, res);
});

// Obtener todos los productos
router.get("/product", (req, res) => {
  crudUtils.getAllItems(productSchema, req, res);
});

// Obtener un producto por ID
router.get("/product/:id", (req, res) => {
  crudUtils.getItemById(productSchema, req, res);
});

// Actualizar un producto por ID
router.put("/product/:id", (req, res) => {
  crudUtils.updateItem(productSchema, req, res);
});

// Eliminar un producto por ID
router.delete("/product/:id", (req, res) => {
  crudUtils.deleteItem(productSchema, req, res);
});

module.exports = router;
