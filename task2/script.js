document.addEventListener('click' ,function()
     { 
        
            console.log(event.clientX);
            console.log(event.clientY);
        
         })
    var fire=document.getElementById("fire")
 document.addEventListener('mousemove' ,function(e)
 { 
    let x=(e.clientX);
   let y=(e.clientY);
   fire.style.left=e.clientX+"px";
   fire.style.top=e.clientY+"px";});