const express = require('express');
const path = require('path');
const request = require('request');
const app = express();
const port = 3000;
const mongoDBClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
var bodyParser = require('body-parser');
const helmet = require('helmet');
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => res.send('Hello World!'));

const makeGetRequest = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (response && response.statusCode === 200) {
                resolve(body);
            }
            else
                reject("Error");
        });
    });
}

const makePostRequest = (url, postBody) => {
    console.log(postBody);
    return new Promise((resolve, reject) => {
        request({ url: url, body: JSON.stringify(postBody) }, (error, response, body) => {
            if (response && response.statusCode === 200) {
                resolve(body);
            }
            else
                reject("Error");
        });
    });
}

/**
 * Get All Posts
 */
app.get('/posts', async (req, res) => {
    res.send(await makeGetRequest('https://jsonplaceholder.typicode.com/posts/'));
});

/**
 * CREATE A NEW POST
 */
app.post('/posts', async (req, res) => {
    res.send(await makePostRequest('https://jsonplaceholder.typicode.com/posts/', req.body));
});

/**
 * Get Comments For A Given Post Id
 */
app.get('/comments/:id', async (req, res) => {
    let postId = req.params.id;
    console.log(postId);
    res.send(await makeGetRequest("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments"));

});
app.get('/mongocomments/:id', async (req, res) => {
    let postId = req.params.id;    
    mongoDBClient.connect(url, (err, db) => {
        if (err) throw err;
        var dbo = db.db("news-feed");
        dbo.collection("comments").find({postId: parseInt(postId)}).toArray((err, result) => {
            db.close();
            if (err) {
                res.status(500);
                res.send("ERROR FETCHING COMMENTS");
            }
            else {
                res.status(200);
                res.send(result);
            }
        });
    });
});

const distDir = path.resolve(__dirname, '../dist')
app.use(express.static(distDir));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));