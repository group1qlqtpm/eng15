const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    msg: 'hello from nodejs express api'
  });
})

app.use('/api/categories', require('./routes/category.route'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
})