var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    let movies = [
        {'id': 1, 'title': 'Deadpool'},
        {'id': 2, 'title': 'Solo'},
        {'id': 3, 'title': 'The Avengers'},
        {'id': 4, 'title': 'Fantastic Beasts & Where to Find Them'},
    ];
    
    res.json(movies);
});

router.post('/add', (req, res, next) => {
    console.log(req.body);
    res.json({message: 'cool!'});
});

module.exports = router;
