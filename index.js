const btnAdd = document.getElementById("btn_add");

// clear all inputs after "Add Expense" button clicked
function clearInputs() {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => (input.value = ""));
}

function addToTable() {
  // getting inputs and pushing into list
  let list = [];
  const name = document.getElementById("input_name").value;
  const date = document.getElementById("input_date").value;
  const amount = document.getElementById("input_amount").value;
  list.push(name);
  list.push(date);
  list.push(amount);
  console.log(list);

  // getting/creating table component
  const tableHead = document.getElementById("table_head");
  const tableBody = document.createElement("tbody");

  // creating row for data
  for (let i = 0; i < 1; i++) {
    const row = document.createElement("tr");

    // creating collumns for row
    for (j = 0; j < list.length; j++) {
      const data = document.createElement("td");
      const cellText = document.createTextNode(list[j]);
      data.appendChild(cellText);
      row.appendChild(data);
    }

    // creating delete button for row
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.setAttribute("class", "btn_delete");
    btnDelete.addEventListener("click", function () {
      tableBody.remove();
    });

    row.appendChild(btnDelete);
    tableHead.appendChild(tableBody);
    tableBody.appendChild(row);
  }

  // clear inputs
  clearInputs();
}

btnAdd.addEventListener("click", addToTable);
