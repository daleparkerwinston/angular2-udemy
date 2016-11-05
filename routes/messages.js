var express = require('express');
var router = express.Router();
var Message = require('../models/message');

// /message
router.post('/', function (req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Error:',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved Message',
            obj: result
        });
    });
});

module.exports = router;