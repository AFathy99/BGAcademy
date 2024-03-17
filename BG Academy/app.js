const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');

app.use(express.static('public'));

// app.use((req, res, next) => {
//   const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
//   console.log('New connection from IP:', clientIp);
//   next();
// });

// Define routes
app.use('/', indexRouter);

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});