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
    }
    
    //make req
    req.OPEN('GET','http://nate141091.imad.hasura-app.io/counter',true);
    req.send(null);
}