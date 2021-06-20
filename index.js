const dataString = localStorage.getItem("users");
let users;

if (dataString) {
  users = JSON.parse(dataString);
} else {
  users = [];
}

function handleAdd() {
  const input = document.getElementById("input-name");
  const value = input.value;
  if (value === "") {
    alert("Please enter text");
    return;
  }
  users.push(value);
  input.value = "";
  localStorage.setItem("users", JSON.stringify(users));
  render();
}

function render() {
  const listUser = document.querySelector(".list-user");
  const content = users.map((item) => {
    return `<li>${item}</li>`;
  });
  listUser.innerHTML = content.join("");
}

render();
