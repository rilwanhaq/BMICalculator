let todos = [];
// var todobutton = document.querySelector('button');
var addToDoButton = document.querySelector('button');
// var inputfield = document.querySelector('input');
var todo = document.querySelector('.todos')
// var i = 0;


// todobutton.addEventListener("click", additem)

// function additem(){
//     var para = document.createElement('p')
//     para.setAttribute("key",i);
//     i = i + 1;
//     para.innerHTML = inputfield.value;
//     todo.appendChild(para);
//     inputfield.value="";
//     para.addEventListener("click", deleteitem)
//     function deleteitem(){
//         todo.removeChild(para)
//     }
// }

async function main() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        todos = json.slice(0, 10);
        console.log(todos);
        todos.forEach((todom,index)=>{
            const newTodo = document.createElement('p');
            newTodo.setAttribute('key', index);
            newTodo.innerHTML = todom.title
            todo.appendChild(newTodo);
        })
    }catch(e) {
        console.log(e);
    }
}

addToDoButton.addEventListener('click',function(){
    todo.innerHTML = ""
    todos.filter(todom => todom.completed).forEach((todom,index)=>{
        const newTodo = document.createElement('p')
        newTodo.setAttribute('key',index)
        newTodo.innerHTML = todom.title
        todo.appendChild(newTodo);
    })
})

main()