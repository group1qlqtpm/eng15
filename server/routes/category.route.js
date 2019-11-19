const express = require('express');
const categoryModel = require('../models/category.model');

const router = express.Router();

router.get('/', (req, res) => {
  // db.load(sql, results => {
  //   res.json(results);
  // });

  categoryModel.all()
    .then(rows => {
      res.json(rows)
    }).catch(err => {
      console.log(err);
      res.status(500);
      res.end('View error log on console.')
    })
})

router.get('/:id', (req, res) => {
  // const sql = `select * from categories where CatID = ${req.params.id}`;
  // db.load(sql, results => {
  //   res.json(results[0]);
  // });

  if (isNaN(req.params.id)) {
    return res.status(400).json({
      err: 'Invalid id.'
    });
  }

  const id = req.params.id || -1;
  categoryModel.loadById(id)
    .then(rows => {
      if (rows.length === 0) {
        res.status(204).end();
      } else {
        res.json(rows[0]);
      }
    }).catch(err => {
      console.log(err);
      res.status(500);
      res.end('View error log on console.')
    })
})

router.post('/add', (req, res) => {
  categoryModel.add(req.body)
    .then(results => {
      const ret = {
        CatID: results.insertId,
        ...req.body
      }
      res.status(201).json(ret);
    })
})

router.delete('/del', (req, res) => {
  res.json({
    msg: 'del'
  });
})

router.patch('/patch', (req, res) => {
  res.json({
    msg: 'patched'
  });
})

module.exports = router;