const todolist = document.getElementById("todolist")
const todopoints = document.getElementById("points")
const saveBtn = document.getElementById("save")
let pointsToDo = []
const listItem = document.getElementById("list-item")

saveBtn.addEventListener('click', function() {
    pointsToDo.push(todolist.value)
    todolist.value = ""
    localStorage.setItem("points", JSON.stringify(pointsToDo))
    renderPoints()


})


function renderPoints() {
    let pointInJs = ""
    for (let i = 0; i < pointsToDo.length; i++) {
        pointInJs += `<li>${pointsToDo[i]} </li>`
    }
    listItem.innerHTML = pointInJs

}