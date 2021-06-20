const dataString = localStorage.getItem("tasks");
let tasks;

if (dataString) {
  tasks = JSON.parse(dataString);
} else {
  tasks = [];
}

function handleAdd() {
  const input = document.getElementById("input-task");
  const value = input.value;
  if (value === "") {
    alert("Please enter text");
    return;
  }
  tasks.push(value);
  input.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

function handleDelItem(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  render();
}

function handleCheckedItem(index) {
  const item = document.querySelector(`.far-${index}`);
  item.classList.add("checked");
}

function render() {
  const listUser = document.querySelector(".list-task");
  const content = tasks.map((item, index) => {
    return `<div class="task-item">
      <button class="btn btn-checked" type="button" onclick=handleCheckedItem(${index})><i class="far fa-check-circle far-${index}"></i></button>
      <li>${item}</li>
      <button class="btn btn-delete" type="button" onclick=handleDelItem(${index})><i class="far fa-times-circle"></i></button>
    </div>`;
  });
  listUser.innerHTML = content.join("");
}

render();
