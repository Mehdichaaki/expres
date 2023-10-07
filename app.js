const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port number
const workingHoursMiddleware = require('./middleware/workingHoursMiddleware');

// Middleware to serve static files from the "public" directory
app.use(express.static('public'));

// Custom middleware to check if it's working hours
app.use(workingHoursMiddleware);

// Use EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Define routes
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/services', (req, res) => {
    res.render('services');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
