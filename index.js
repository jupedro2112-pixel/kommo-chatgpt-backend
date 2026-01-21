const express = require('express');
const app = express();
const port = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Ruta para recibir los mensajes del webhook de Kommo
app.post('/webhook', (req, res) => {
    const incomingMessage = req.body; // El mensaje de Kommo

    // Mostrar el mensaje recibido en los logs
    console.log('Mensaje recibido de Kommo:', incomingMessage);

    // Responder al webhook
    res.json({ message: 'Mensaje recibido correctamente' });
});

// Servir el servidor en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
