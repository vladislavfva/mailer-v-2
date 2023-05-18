const express = require('express');
const app = express();

app.post('/form-submit', (req, res) => {
  const formData = req.body;
  console.log(formData);
  // Здесь можно добавить код для обработки данных формы
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});