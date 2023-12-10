const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');  // Agregamos el middleware CORS
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// Configuración de multer para manejar datos multipart/form-data
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware para procesar datos multipart
app.use(upload.any());

// Middleware CORS
app.use(cors());  // Esto permite solicitudes desde cualquier origen (*). Puedes configurarlo de manera más restrictiva si es necesario.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

