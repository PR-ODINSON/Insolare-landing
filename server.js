require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

const LANDING_PORT = process.env.LANDING_PORT || 5000;
const ATTENDANCE_HOST = process.env.ATTENDANCE_HOST || 'localhost';
const ATTENDANCE_PORT = process.env.ATTENDANCE_PORT || 3000;
const OM_HOST = process.env.OM_HOST || 'localhost';
const OM_PORT = process.env.OM_PORT || 3001;

const ATTENDANCE_URL = `http://${ATTENDANCE_HOST}:${ATTENDANCE_PORT}`;
const OM_URL = `http://${OM_HOST}:${OM_PORT}`;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/config', (req, res) => {
  res.json({
    attendanceUrl: ATTENDANCE_URL,
    omUrl: OM_URL,
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(LANDING_PORT, () => {
  console.log('');
  console.log('  ╔══════════════════════════════════════════╗');
  console.log('  ║        Insolare Landing Page             ║');
  console.log('  ╠══════════════════════════════════════════╣');
  console.log(`  ║  Landing Page  →  http://localhost:${LANDING_PORT}   ║`);
  console.log(`  ║  Attendance    →  ${ATTENDANCE_URL.padEnd(22)}║`);
  console.log(`  ║  O&M Module    →  ${OM_URL.padEnd(22)}║`);
  console.log('  ╚══════════════════════════════════════════╝');
  console.log('');
});
