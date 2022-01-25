var todobutton = document.querySelector('button');
var inputfield = document.querySelector('input');
var todo = document.querySelector('.todos')
var i = 0;


todobutton.addEventListener("click", additem)

function additem(){
    var para = document.createElement('p')
    para.setAttribute("key",i);
    i = i + 1;
    para.innerHTML = inputfield.value;
    todo.appendChild(para);
    inputfield.value="";
    para.addEventListener("click", deleteitem)
    
    function deleteitem(){
        todo.removeChild(para)
    }
}

