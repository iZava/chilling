const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

//? settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//? static files
app.use(express.static(path.join(__dirname, '../public')));

//? routes
app.use('/', require('./routes/mainRouter'));

//? start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



