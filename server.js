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

// 1. INICIAR LA CONEXIÓN DB ASÍNCRONAMENTE (Para Vercel y Desarrollo)
//    Esto inicia la promesa y usa el caché si ya está caliente.
connectDB().then(() => {
    console.log('✅ Conexión a MongoDB establecida correctamente.');
}).catch(err => {
    console.error('❌ Error conectando a MongoDB:', err.message);
    // Nota: Es mejor no salir del proceso aquí, sino dejar que Express siga intentándolo.
});

// 2. DEFINICIÓN DE RUTAS (Síncrona)
app.use('/api/auth', authRoutes);
app.use('/api/sensors', sensorRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: '🚀 API de Riego funcionando!' });
});

// 3. BLOQUE EXCLUSIVO PARA DESARROLLO LOCAL
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
}

// 4. EXPORTACIÓN FINAL PARA VERCEL
module.exports = app;