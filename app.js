const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', {
        prompt: 'Who is buried in Grant\'s tomb',
        hint: 'Think about who\s tomb'
    })
});






//  SANDBOX PAGE
app.get('/sandbox', (req, res) => {
    res.render(
        'sandbox',
        {
            names: [
                {
                    fname: 'Andrew',
                    lname: 'Keith'
                },
                {
                    fname: 'Suzy',
                    lname: 'Littles'
                },
                {
                    fname: 'Timmy',
                    lname: 'Toddler'
                }
            ]
        }
    )
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
