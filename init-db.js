const fs = require('fs');
const pool = require('./db');

const sql = fs.readFileSync('schema.sql').toString();

pool.connect((err, client, done) => {
  if (err) throw err;
  client.query(sql, (err, res) => {
    done();
    if (err) {
      console.log(err.stack);
    } else {
      console.log('Tables created successfully!');
    }
    process.exit();
  });
});