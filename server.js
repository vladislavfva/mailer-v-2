const express = require('express');
const app = express();

app.post('/form-submit', (req, res) => {
  const formData = req.body;
  console.log(formData);
  // Здесь можно добавить код для обработки данных формы

  const response = {
    message: 'Данные формы успешно отправлены на сервер',
    formData: formData  // Включите нужные данные формы в ответ
  };

  res.json(response);
});