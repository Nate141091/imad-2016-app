var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'MainProfile.html'));
});

var articles = {
    'edu' : {
        title : 'Educational Details',
        header : 'Education',
        content : ``
    },
    'prof' : {
        title : 'Professional Details',
        header : 'Professional Experience',
        content : ``
	},
    'courses' : {
        title : 'Courses',
        header : 'Courses taken',
        content : ``
	}
}

function createTemplate(data) {
    var title = data.title;
    var header = data.header
    var content = data.content;
    
    var htmlTemplate = `
        <html>
            <head>
                <title>
                ${title}
                </title>
                <meta name='viewport' content='width-device-width, initial-scale-1' /> 
				<link href="profile.css" rel="stylesheet" type="text/css">
				<link href="https://fonts.googleapis.com/css?family=Alegreya|Cinzel|Josefin+Slab|Muli|Raleway|Scope+One" rel="stylesheet">
            </head>
            
            <body>
				<div id="container">
					<div id="links" align="center">
						<ul id="nav">
							  <li><a href="/">Profile</a></li>
							  <li><a href="/edu">Education</a></li>
							  <li><a href="/prof">Professional</a></li>
							  <li><a href="/courses">Courses</a></li>
						</ul>
					</div>	
					<hr/>
					<div id="header" align="center">
						${header}		
					</div>
					<hr/>
					<div id="content">
						${content}
					</div>
					<hr/><br/>
					<div id="input_comm">
						Please leave your name and comment below <br/>
						<table border="0" cellspacing="5">
							<tr>
								<td>Name : </td>
								<td><input type="text" id="name" title="name" /></td>
							</tr>
							<tr>
								<td>Comment : </td>
								<td><textarea rows="4" cols="50" id="comment"></textarea></td>
							</tr>
							<tr>
								<td></td>
								<td><input type="submit" name="Submit" /></td>					
							</tr>
						</table>
					</div>
					<div id="comments" align="left">
						<ul style="list-style-type:none">
						</ul>
					</div>	
					<script type="text/javascript" src="/ui/main.js">
					</script>
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



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
