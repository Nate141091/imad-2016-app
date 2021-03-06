var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    'article-one' : {
        title : 'Article One | Nathan',
        heading : 'Article One',
        date : '29<sup>th</sup> September, 2016',
        content : `
            <p>
                This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. 
            </p>
            <p>
                This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. 
            </p>
            <p>
                This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. This is the content for article one. 
            </p>    `
    },
    'article-two' : {
        title : 'Article Two | Nathan',
        heading : 'Article Two',
        date : '29<sup>th</sup> September, 2016',
        content : `
            <p>
                This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. 
            </p>
            <p>
                This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. 
            </p>
            <p>
                This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. This is the content for article Two. 
            </p>   `
},
    'article-three' : {
        title : 'Article Three | Nathan',
        heading : 'Article Three',
        date : '29<sup>th</sup> September, 2016',
        content : `
            <p>
                This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. 
            </p>
            <p>
                This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. 
            </p>
            <p>
                This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. This is the content for article three. 
            </p>    `
}
}

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
            <head>
                <title>
                ${title}
                </title>
                <meta name='viewport' content='width-device-width, initial-scale-1' /> 
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            
            <body>
                <div class='container'>
                    <div>
                        <a href='/'>Home</a>
                    </div>
                    <hr/>
                    <div>
                        <h2>${heading}</h2>
                    </div>
                    <div>${date}</div>
                    <div>${content}</div>
                </div>
            </body>
        </html> 
    `;
    return htmlTemplate;
}

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/profile.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'profile.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
