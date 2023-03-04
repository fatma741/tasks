var body = document.body;


document.addEventListener('click' , function()
{
    var x = Math.round(Math.random()*255)
    var y = Math.round(Math.random()*255)
    var z = Math.round(Math.random()*255)
    body.style.background ="rgb("+x+","+y+","+z+")";

})


