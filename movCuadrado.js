document.addEventListener('keydown', function(event) {
    var element=document.getElementById('cuadrado');
    var left= parseInt(element.style.left) || 0;
    var top= parseInt(element.style.top) || 0;
    var step=10;

    switch(event.key){
        case'ArrowLeft':
           left-=step;
           break;
        case'ArrowRight':
           left+=step;
           break;
        case'ArrowTop':
           top-=step;
           break;
        case'ArrowDown':
           top+=step;
           break;
    };

    element.style.left= left + 'px';
    element.style.top= top + 'px';
})