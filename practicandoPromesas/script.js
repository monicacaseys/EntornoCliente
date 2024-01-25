var n1 = 10;
var n2 = 3;
var div;

function cambio(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve (n1 = n1 * 5)
        },2000)
    })
}

cambio().then(()=>{
    console.log(div = n1 / n2)
})