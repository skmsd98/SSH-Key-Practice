const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', (blah) => (blah + new Date().getFullYear()));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Home page!</h1>');
});

app.get('/json', (req, res) => {
    res.send({
        name: "sabir",
        age: 20,
        occupation: "student",
        interest: "computer science",
        anotherObject: {
            name: "sabir",
            age: 20,
            occupation: "student",
            interest: "computer science"
        }
    })

});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        heading1: 'About Page',
        footer: 'Copyright 2016'
    });
})

app.get('/some', (req, res) => {
    res.render('some.hbs', {
        heading1: 'About Page',
        footer: 'Copyright 2016'
    });
})

app.get('/other', (req, res) => {
    res.render('other.hbs', {
        heading1: 'About Page',
        footer: 'Copyright 2016'
    });
})
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});