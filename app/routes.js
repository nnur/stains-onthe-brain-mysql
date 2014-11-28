//===============================Make connection to db===================================//
var mysql = require('mysql');
var connection = require('express-myconnection'); //for db access

var connection = mysql.createConnection({
    host: '104.131.5.102',
    user: 'dylan',
    password: 'bluecakes',
    database: 'stains',
});

connection.connect();



//================================Routes===========================================//

module.exports = function(app) {

    app.get('/test', function(req, res) {

        console.log('IN TEST');
        res.send('heheh');
    });

    //Query by username
    app.get('/user/:username', function(req, res) {
        connection.query('SELECT * FROM user WHERE (username = "' + req.params.username + '")',
            function(err, rows) {
                if (err)
                    res.send(err);
                res.json(rows);

            });
    });
    //Query by user_id
    app.get('/user_id/:user_id', function(req, res) {
        connection.query('SELECT * FROM user WHERE (user_id = "' + req.params.user_id + '")',
            function(err, rows) {
                if (err)
                    res.send(err);
                res.json(rows);

            });
    });

    app.get('/matches/:username', function(req, res) {

        connection.query('SELECT degree_of_match, user1_id, user2_id FROM matches WHERE (user1_id = (SELECT user_id FROM user WHERE username = "' + req.params.username + '") OR user2_id = (SELECT user_id FROM user WHERE username = "' + req.params.username + '")) ORDER BY degree_of_match LIMIT 0,10',
            function(err, rows) {

                if (err)
                    res.send(err);

                res.json(rows);

            });
    });



}