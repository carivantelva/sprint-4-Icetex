const express = require("express");
const cartSchema = require("../models/cart");
const crudUtils = require("./crudUtils");

const router = express.Router();

// Crear un item en el carrito
router.post("/cart", (req, res) => {
  crudUtils.createItem(cartSchema, req, res);
});

// Obtener todos los items del carrito
router.get("/cart", (req, res) => {
  crudUtils.getAllItems(cartSchema, req, res);
});

// Obtener un item del carrito por ID
router.get("/cart/:id", (req, res) => {
  crudUtils.getItemById(cartSchema, req, res);
});

// Actualizar un item del carrito por ID
router.put("/cart/:id", (req, res) => {
  crudUtils.updateItem(cartSchema, req, res);
});

// Eliminar un item del carrito por ID
router.delete("/cart/:id", (req, res) => {
  crudUtils.deleteItem(cartSchema, req, res);
});

module.exports = router;
