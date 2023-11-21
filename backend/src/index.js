const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/user");
const loginRoutes = require("./routes/login");
const productRoutes = require("./routes/product");

const cartRoutes = require("./routes/cartRoute");










const app = express();
const port = process.env.PORT || 3600;



//middleware

app.use(express.json());
app.use('/api',userRoutes );
app.use('/api',loginRoutes );

app.use('/api',productRoutes );
app.use('/api',cartRoutes );









//routes

app.get("/", (req, res) => {
  res.send("welcome to my API");
});

//mongodb conection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('conectado a mongoDB atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log("servidor en el puerto", port))

