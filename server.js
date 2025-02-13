const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 443; // Обычно HTTPS работает на порту 443

// Загрузка сертификатов
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
};

// Настройка статического сервера (например, для вашего PWA)
app.use(express.static('build'));

// Обработка запросов
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Создание HTTPS сервера
https.createServer(options, app).listen(port, () => {
  console.log(`Сервер работает на https://localhost:${port}`);
});
