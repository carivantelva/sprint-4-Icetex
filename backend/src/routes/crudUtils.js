// crudUtils.js

// Función para crear un nuevo item en la base de datos
const createItem = (model, req, res) => {
  const item = new model(req.body); // Crear una instancia del modelo con los datos del cuerpo de la solicitud
  item
    .save() // Guardar el nuevo item en la base de datos
    .then((data) => res.json(data)) // Enviar la respuesta JSON con los datos guardados
    .catch((error) => res.json({ message: error })); // Manejar errores y enviar un mensaje de error en la respuesta
};

// Función para obtener todos los items de la base de datos
const getAllItems = (model, req, res) => {
  model
    .find() // Buscar todos los items en la base de datos
    .then((data) => res.json(data)) // Enviar la respuesta JSON con los datos encontrados
    .catch((error) => res.json({ message: error })); // Manejar errores y enviar un mensaje de error en la respuesta
};

// Función para obtener un item por su ID
const getItemById = (model, req, res) => {
  const { id } = req.params; // Obtener el ID de los parámetros de la solicitud
  model
    .findById(id) // Buscar un item por su ID en la base de datos
    .then((data) => res.json(data)) // Enviar la respuesta JSON con los datos encontrados
    .catch((error) => res.json({ message: error })); // Manejar errores y enviar un mensaje de error en la respuesta
};

// Función para actualizar un item por su ID
const updateItem = (model, req, res) => {
  const { id } = req.params; // Obtener el ID de los parámetros de la solicitud
  const updateFields = req.body; // Obtener los campos a actualizar del cuerpo de la solicitud
  model
    .updateOne({ _id: id }, { $set: updateFields }) // Actualizar el item en la base de datos
    .then((data) => res.json(data)) // Enviar la respuesta JSON con los datos actualizados
    .catch((error) => res.json({ message: error })); // Manejar errores y enviar un mensaje de error en la respuesta
};

// Función para eliminar un item por su ID
const deleteItem = (model, req, res) => {
  const { id } = req.params; // Obtener el ID de los parámetros de la solicitud
  model
    .deleteOne({ _id: id }) // Eliminar el item de la base de datos
    .then((data) => res.json(data)) // Enviar la respuesta JSON con los datos de eliminación
    .catch((error) => res.json({ message: error })); // Manejar errores y enviar un mensaje de error en la respuesta
};

// Exportar todas las funciones como un módulo
module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};
