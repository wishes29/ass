require('dotenv').config();
const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
// const donateRouter = require('./routes/donate');


const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRouter);
// app.use('/', donateRouter);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Make-A-Wish.org running on http://localhost:${PORT}`);
});

// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).render('404');
});