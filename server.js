const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const https = require('https');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/form-submit', (req, res) => {
  const formData = req.body;
  console.log(formData);
  // Здесь можно добавить код для обработки данных формы
  res.send('Данные формы успешно отправлены на сервер');
});

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/devvlad.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/devvlad.com/fullchain.pem'),
};

https.createServer(options, app).listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});