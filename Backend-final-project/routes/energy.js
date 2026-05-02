const express = require('express');
const router = express.Router();
const pool = require('../queries');

// --- 1. READ ---
router.get('/rates', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM state_rates');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 2. CREATE ---
router.post('/calculate', async (req, res) => {
  const { state, plugs, bulbs, tvs, ac, btu, usageHours } = req.body;

  try {
    
    const rateResult = await pool.query('SELECT * FROM state_rates WHERE state_code = $1', [state]);
    const rate = rateResult.rows[0]?.kwh_cost || 0.25;
    const stateName = rateResult.rows[0]?.name || 'Unknown';

    // Business Logic
    const plugSpending = plugs * usageHours * 0.05 * 30 * rate;
    const bulbSpending = bulbs * usageHours * 0.06 * 30 * rate;
    const tvSpending = tvs * usageHours * 0.1 * 30 * rate;
    const acSpending = ac ? ((btu / 10000) * usageHours * 30 * rate) : 0;

    const spending = (plugSpending + bulbSpending + tvSpending + acSpending).toFixed(2);
    const savings = ((bulbSpending * 0.8) + (tvSpending * 0.4) + (acSpending * 0.2) + (plugSpending * 0.2)).toFixed(2);

    const newEntry = await pool.query(
      'INSERT INTO history (state_name, plugs, bulbs, tvs, ac, btu, usage_hours, spending, savings) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [stateName, plugs, bulbs, tvs, ac, btu, usageHours, spending, savings]
    );

    res.status(201).json(newEntry.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 3. READ ---
router.get('/history', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM history ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 4. UPDATE ---
router.put('/history/:id', async (req, res) => {
  const { id } = req.params;
  const { usage_hours } = req.body;
  try {
    const updated = await pool.query(
      'UPDATE history SET usage_hours = $1 WHERE id = $2 RETURNING *',
      [usage_hours, id]
    );
    res.json(updated.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- 5. DELETE ---
router.delete('/history/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM history WHERE id = $1', [id]);
    res.json({ message: "Record successfully deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;