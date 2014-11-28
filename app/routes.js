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

    app.get('/user/:username', function(req, res) {
        connection.query('SELECT * FROM user WHERE (username = "' + req.params.username + '")',
            function(err, rows) {
                if (err)
                    res.send(err);
                res.json(rows);

            });
    });

    app.get('/user/:user_id', function(req, res) {
        connection.query('SELECT user_id FROM user WHERE (username = "' + req.params.username + '")',
            function(err, rows) {
                if (err)
                    res.send(err);
                res.json(rows);

            });
    });

    app.get('/matches/:username', function(req, res) {
        connection.query('SELECT degree_of_match, user1_id, user2_id FROM matches WHERE (user1_id = (SELECT user_id FROM user WHERE username = "' + req.params.username + '") OR user2_id = (SELECT user_id FROM user WHERE username = "' + req.params.username + '")) ORDER BY degree_of_match LIMIT 0,10'),
        function(err, rows) {
            if (err)
                res.send(err);
            res.json(rows);

        }
    });

    app.post("/user/create", function(req, res) {
        console.log(req.body);

        var values =
            "(username, password, firstname, lastname, email, level_num, country, gender, preference)";

        var post = "INSERT INTO user" + values + "VALUES (" + "'" + req.body.username + "'" + "," +
            "'" + req.body.password + "'" + "," +
            "'" + req.body.firstname + "'" + "," +
            "'" + req.body.lastname + "'" + "," +
            "'" + req.body.email + "'" + "," +
            "'" + req.body.level_num + "'" + "," +
            "'" + req.body.country + "'" + "," +
            "'" + req.body.gender + "'" + "," +
            "'" + req.body.preference + "'" + ")";


        console.log(' in a pie ' + post);

        connection.query(post, function(error) {
            if (error) {

                console.log(error.message);
            } else {
                console.log('post ');

            }
        });
    });


}