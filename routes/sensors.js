const express = require('express');
const { getDB } = require('../config/db');

const router = express.Router();

// Obtener todos los sensores
router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const sensors = await db.collection('sensors').find({}).sort({ timestamp: -1 }).toArray();
    res.json(sensors);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo sensores', error: error.message });
  }
});

// Obtener último registro
router.get('/latest', async (req, res) => {
  try {
    const db = getDB();
    const sensor = await db.collection('sensors').findOne({}, { sort: { timestamp: -1 } });
    res.json(sensor);
  } catch (error) {
    res.status(500).json({ message: 'Error obteniendo último sensor', error: error.message });
  }
});

// Crear nuevo registro de sensor
router.post('/', async (req, res) => {
  try {
    const { temperature, humidity, estado } = req.body;
    
    const db = getDB();
    const result = await db.collection('sensors').insertOne({
      temperature,
      humidity,
      estado,
      timestamp: new Date().toISOString()
    });
    
    res.status(201).json({ 
      message: 'Sensor guardado',
      id: result.insertedId
    });
  } catch (error) {
    res.status(500).json({ message: 'Error guardando sensor', error: error.message });
  }
});

module.exports = router;