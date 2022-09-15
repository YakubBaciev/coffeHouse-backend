const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());
app.use(require('./routes/drinks.route'))

mongoose.connect('mongodb+srv://Yakub:mecheti95@cluster228.kvjyiib.mongodb.net/coffeHouse',
(err) => {
  if(err){
    console.log(err);
  }
  console.log('mongodb запущен');
  
  app.listen(port, () => {
    console.log('сервер запущен');
  })
}
)