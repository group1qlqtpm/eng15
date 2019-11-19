const mysql = require('mysql');

const createConnection = () => mysql.createConnection({
  host: 'localhost',
  port: '8889',
  user: 'root',
  password: 'root',
  database: 'qlbh'
});

module.exports = {
  load: sql => new Promise((resolve, reject) => {
    const connection = createConnection();
    connection.connect();
    connection.query(sql, (error, results, fields) => {
      if (error)
        reject(error);
      else resolve(results);

      connection.end();
    });
  }),

  add: (entity, tableName) => new Promise((resolve, reject) => {
    const sql = `insert into ${tableName} set ?`;
    const connection = createConnection();
    connection.connect();
    connection.query(sql, entity, (error, results, fields) => {
      if (error)
        reject(error);
      else resolve(results);

      connection.end();
    });
  })


  // load: (sql, fn_done) => {
  //   const connection = mysql.createConnection({
  //     host: 'localhost',
  //     port: '8889',
  //     user: 'root',
  //     password: 'root',
  //     database: 'qlbh'
  //   });

  //   connection.connect();
  //   connection.query(sql, (error, results, fields) => {
  //     fn_done(results);
  //     connection.end();
  //   });
  // }
};
