
/*eslint-disable*/
var selectedRow = null;
let sortDirection = false;
window.onload = () => {
  loadData(addList);
};
function onFormSubmit() {
  var formData = readData();
  if (selectedRow == null) addList(filledData);
  else updatedRecord(filledData);
  addList(filledData);
  resetForm();
}
function addList(data) {
  var table = document
    .getElementById("itemList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cel1 = newRow.insertCell(0);
  cel1.innerHTML = data.name;
  cel2 = newRow.insertCell(1);
  cel2.innerHTML = data.category;
  cel3 = newRow.insertCell(2);
  cel3.innerHTML = data.quantity;
  cel4 = newRow.insertCell(3);
  cel4.innerHTML = data.ratings;
  cel4 = newRow.insertCell(4);
  cel4.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                          <a>Delete</a>`;
}
function submit() {
  var filledData = read();
  addRow(filledData);
}
function readData() {
  var filledData = [];
  filledData["name"] = document.getElementById("name").value;
  filledData["category"] = document.getElementById("category").value;
  filledData["quantity"] = document.getElementById("quantity").value;
  filledData["ratings"] = document.getElementById("ratings").value;

  return filledData;
}
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("ratings").value = "";
  selectedRow = null;
}
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("category").value = selectedRow.cells[1].innerHTML;
  document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
  document.getElementById("ratings").value = selectedRow.cells[3].innerHTML;
}
function updatedRecord(filledData) {
  selectedRow.cells[0].innerHTML = filledData.name;
  selectedRow.cells[1].innerHTML = filledData.category;
  selectedRow.cells[2].innerHTML = filledData.quantity;
  selectedRow.cells[3].innerHTML = filledData.ratings;
}
function onDelete(td) {
  if (confirm("Are you sure you want to delete this data?")) {
    row = td.parentElement.parentElement;
    document.getElementById("itemList").deleteRow(row, rowIndex);
  }
}
function filter(addList) {
  addList().filter((a) => a.quantity > 100);
}

function sort(column) {
  const dataType = typeof addList[0](column);
  sortDirection = !sortDirection;
  switch (dataType) {
    case number:
      sortCol(sortDirection, column);
      break;
    case string:
      sortCol(sortDirection, column);
      break;
  }
  loadData(addList);
}

function sortCol(sort, column) {
  let enteredData = addList();
  enteredData = enteredData.sort((a, b) => {
    return sort ? a[column] - b[column] : b[column] - a[column];
  });
}
