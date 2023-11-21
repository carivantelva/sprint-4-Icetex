
const express = require("express");
const jwt = require("jsonwebtoken");
const loginSchema = require("../models/login");
const crudUtils = require("./crudUtils");

const router = express.Router();

// Middleware de autenticación JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Acceso denegado" });

  jwt.verify(token, "123456", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token no válido" });
    }
    req.user = user;
    next();
  });
};

// Rutas protegidas con autenticación JWT

// Crear login
router.post("/logins", (req, res) => {
  crudUtils.createItem(loginSchema, req, res);
});

// Obtener todos los logins (requiere autenticación)
router.get("/logins", authenticateJWT, (req, res) => {
  crudUtils.getAllItems(loginSchema, req, res);
});

// Obtener un login por ID (requiere autenticación)
router.get("/logins/:id", authenticateJWT, (req, res) => {
  crudUtils.getItemById(loginSchema, req, res);
});

// Actualizar un login (requiere autenticación)
router.put("/logins/:id", authenticateJWT, (req, res) => {
  crudUtils.updateItem(loginSchema, req, res);
});

// Eliminar un login (requiere autenticación)
router.delete("/logins/:id", authenticateJWT, (req, res) => {
  crudUtils.deleteItem(loginSchema, req, res);
});

module.exports = router;
