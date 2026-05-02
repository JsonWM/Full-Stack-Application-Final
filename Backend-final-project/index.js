const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const energyRoutes = require('./routes/energy');
app.use('/api/energy', energyRoutes);

app.get('/', (req, res) => {
    res.send('Server working');
});

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});