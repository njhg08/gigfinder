const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const { testDB } = require('./config/database');

const app = express();

// Test DB Connection
testDB();

app.use(express.json());

// Handlebars template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Index route
app.get('/', (req, res) => {
  res.render('index', { layout: 'landing' });
});

// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}.`));
