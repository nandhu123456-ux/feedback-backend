
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let messages = []; // In-memory storage (you can replace with DB or Google Sheets later)

app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  const entry = { name, message, time: new Date().toLocaleString() };
  messages.push(entry);
  res.json({ status: 'received', entry });
});

app.get('/messages', (req, res) => {
  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
