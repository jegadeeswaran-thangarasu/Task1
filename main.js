let person = {
    name : [],
    email : [],
    phoneNumber : []
}

function addNew() {
    window.open('addNew.html')
}
function formData() {
    let name = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    person.name.push(name);
    person.email.push(email);
    person.phoneNumber.push(phoneNumber);
}

function displayEmployeeDetails() {
    alert('I am DisplayEmployeeDetails() ')
    for(let i = 0; i < person.name.length; i++) {
        document.writeln(person.name[i] + "  " + person.email[i] + "  " + person.phoneNumber[i])
    }
}