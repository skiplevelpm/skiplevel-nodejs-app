const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Great job on this assignment!')
});

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  const greeting = `Hi ${name}, congrats on setting up your local development using NodeJS!`;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting }));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;