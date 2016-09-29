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
    //req counter endpoint
    var req = new XMLHttpRequest();
    
    //get response and store it in a var
    req.onreadystatechange = function() {
        if(req.readyState === XMLHttpRequest.DONE)
        {
            if(req.status === 200)
            {
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i<names.length; i++)
                {
                    list += '<li>'+names[i]+'</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML=list;    
            }
        }
    };
    
    //make req
                req.open('GET','http://nate141091.imad.hasura-app.io/submit-name?name='+name,true);
                req.send(null);
                
                
};
