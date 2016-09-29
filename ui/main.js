//COUNTER
var button = document.getElementById('counter');
button.onclick = function() {
    //req counter endpoint
    var req = new XMLHttpRequest();
    
    //get response and store it in a var
    req.onreadystatechange = function() {
        if(req.readyState === XMLHttpRequest.DONE)
        {
            if(req.status === 200)
            {
                var counter = req.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //make req
    req.open('GET','http://nate141091.imad.hasura-app.io/counter',true);
    req.send(null);
};

//NAME
var nameip = document.getElementById('name');
var name = nameip.value;
var submit = document.getElementById('submitbtn');
submit.onclick = function() {
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for(var i=0; i<names.length; i++)
    {
        list += '<li>'+names[i]+'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHtml=list;
};
