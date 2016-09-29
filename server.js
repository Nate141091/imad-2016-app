var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    articleOne : {
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
    articleTwo : {
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
    articleThree : {
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


app.get('/article-one', function (req, res) {
    res.send(createTemplate(articles[1]));
});

app.get('/article-two', function (req, res) {
    res.send(createTemplate(articles[2]));
});

app.get('/article-three', function (req, res) {
    res.send(createTemplate(articles[3]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
