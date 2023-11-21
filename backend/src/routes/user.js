
const express = require("express");
const userSchema = require("../models/user");
const crudUtils = require("./crudUtils");

const router = express.Router();

// Crear un usuario
router.post("/users", (req, res) => {
  crudUtils.createItem(userSchema, req, res);
});

// Obtener todos los usuarios
router.get("/users", (req, res) => {
  crudUtils.getAllItems(userSchema, req, res);
});

// Obtener un usuario por ID
router.get("/users/:id", (req, res) => {
  crudUtils.getItemById(userSchema, req, res);
});

// Actualizar un usuario por ID
router.put("/users/:id", (req, res) => {
  crudUtils.updateItem(userSchema, req, res);
});

// Eliminar un usuario por ID
router.delete("/users/:id", (req, res) => {
  crudUtils.deleteItem(userSchema, req, res);
});

module.exports = router;
