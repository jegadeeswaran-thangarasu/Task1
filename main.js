let selectedRow = null;
let initialData = false;


function onFormSubmit() {
    let formData = readFormData();
    if(!selectedRow){
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    let formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["emailAddress"] = document.getElementById("emailAddress").value;
    formData["phoneNumber"] = document.getElementById("phoneNumber").value;
    return formData;
}

function insertNewRecord(data) {
    let localData = JSON.parse(localStorage.getItem('employeeDetails'));
    if(localData == undefined) {
        let initData = [];
        initData.push(data);
        localStorage.employeeDetails = JSON.stringify(initData);
        initialData = true;
    } else {
        localData.push(data);
        localStorage.employeeDetails = JSON.stringify(localData);
    }
    insertIntoTable();
    /*
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.emailAddress;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.phoneNumber;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                       <a onclick="onDelete(this)">Delete</a>`;
    */                   
}

function insertIntoTable() {
    let localData = JSON.parse(localStorage.getItem('employeeDetails'));
    let table = document.getElementById("employeeList");
    //alert(localData.length);
    let index = localData.length;
    let i = index-1;
    let row = table.insertRow();
    cell1 = row.insertCell(0);
    cell1.innerHTML = localData[i].fullName;
    cell2 = row.insertCell(1);
    cell2.innerHTML = localData[i].emailAddress;
    cell3 = row.insertCell(2);
    cell3.innerHTML = localData[i].phoneNumber;
    cell4 = row.insertCell(3);
    cell4.innerHTML = `<a onclick="onEdit(this)">Edit</a>
                        <a onclick="onDelete(this)">Delete</a>`

    /*
    for( let i = 0; i < localData.length; i++ ) {
        
    }
    */
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("phoneNumber").value = "";
}

function onEdit(rowData) {
    selectedRow = rowData.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("emailAddress").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phoneNumber").value = selectedRow.cells[2].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.emailAddress;
    selectedRow.cells[2].innerHTML = formData.phoneNumber;
    selectedRow = null;
}

function onDelete(rowData) {
    let localData = JSON.parse(localStorage.getItem('employeeDetails'));
    row = rowData.parentElement.parentElement;
    alert(row.rowIndex);
    delete localData[row.rowIndex-1];
    localStorage.employeeDetails = JSON.stringify(localData);
    //location.reload();
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
}