var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //req counter endpoint
    
    //get response and store it in a var
    
    //put it in the right place
    counter = counter + 1;
    var span = document.getElementById('span');
    span.innerHTML = counter.toString();
}