const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { connectDB } = require('./config/db');
const authRoutes = require('./routes/auth');
const sensorRoutes = require('./routes/sensors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/sensors', sensorRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: '🚀 API de Riego funcionando!' });
});

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  });
}

// Para Vercel (producción)
connectDB();

module.exports = app;