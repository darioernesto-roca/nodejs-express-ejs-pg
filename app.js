 require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const indexRouter = require('./routes/index');
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});