const users = [];

function handleAdd() {
  const input = document.getElementById("input-name");
  const value = input.value;
  users.push(value);
  input.value = "";
  render();
}

function render() {
  const listUser = document.querySelector(".list-user");
  const content = users.map((item) => {
    return `<li>${item}</li>`;
  });
  listUser.innerHTML = content.join("");
}

handleAdd();
