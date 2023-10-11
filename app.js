const express = require('express');
const multer = require('multer');
require('dotenv').config();

const ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const errorController = require('./controllers/error');

const app = express();

const videoroute = require('./routes/videoroute');

app.use(videoroute);
app.use(errorController.get404);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
