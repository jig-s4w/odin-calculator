// const key = document.querySelector(".numbers")
// key.addEventListener("click",test)

// const display = document.querySelector(".display-span")

// function test(e){
//     // switch(e){
//     //     case :
            
//     // }    
//     console.log(e.target.textContent)
// }

const display = document.querySelector(".display-span")

if (document.body.addEventListener){
    document.body.addEventListener('click',yourHandler,false);
}
else{
    document.body.attachEvent('onclick',yourHandler);//for IE
}



function yourHandler(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.className.match("numbers"))
    {
        console.log(e.target.textContent)
        display.textContent = display.textContent + e.target.textContent
        //an element with the keyword Class was clicked
    }
    if (target.className.match("operations"))
    {
        console.log(e.target.textContent)
    }
}

function operation(e){
    
}