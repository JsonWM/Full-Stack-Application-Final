const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  //For deployment
  // ssl: { rejectUnauthorized: false } 
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL');
});

module.exports = pool;