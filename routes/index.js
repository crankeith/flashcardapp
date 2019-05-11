const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if(name){
        res.render('index', { name });
    } else {
        res.redirect('/hello')
    }
});

router.get('/hello', ( req, res) => {
    const name = req.cookies.username;
    if(name){
        res.redirect('/')
    } else {
        res.render('hello')
    }
});

router.post('/hello', ( req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/')
});

router.post('/goodbye', (req, res)=>{
    res.clearCookie('username');
    res.redirect('/hello');
});

//  SANDBOX PAGE
router.get('/sandbox', (req, res) => {
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

module.exports = router;