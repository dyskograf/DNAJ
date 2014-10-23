// Adding new task
var buttonAddTask = document.querySelector('#buttonAddTask');

buttonAddTask.addEventListener('click', function () {
    var inputAddTask = document.getElementById('inputAddTask');
    
    var tableTasks = document.getElementById('tableTasks').getElementsByTagName('tbody')[0]
    var tasksCount = tableTasks.rows.length;

    var row = tableTasks.insertRow(tasksCount);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = inputAddTask.value;
    cell2.innerHTML = '<a href="#" class="btn btn-danger" onclick="deleteRow(this);">Delete</a>';
    
    inputAddTask.value = "";
});

function deleteRow(el) {

  while (el.parentNode && el.tagName.toLowerCase() != 'tr') {
    el = el.parentNode;
  }

  if (el.parentNode && el.parentNode.rows.length > 1) {
    el.parentNode.removeChild(el);
  }
}