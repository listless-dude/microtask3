const express = require('express');
const app = express();

const PORT = 5000;

app.use('/api/geolocation', require('./routers/api'))

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });

module.exports = app;
