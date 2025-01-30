//Global variables
let selectedGender = "";
let selectType ="";

//Generate Contact function
function addContact() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    //validate inputs
    if (name === "" || phone === "" || selectType === ""|| selectedGender === "") {
        alert("Please enter name, phone number, contact type, and gender. Please click on the buttons.");
        return;
    }

    //create a new list of contacts
    let li = document.createElement("li");
    li.textContent = `${"Name: " + name} - ${"Phone: " + phone} - ${"Contact Type: " + selectType} - 
    (${"Gender: " + selectedGender})`;

    //starts adding contacts to the list
    document.getElementById("contactList").appendChild(li);

    //clear inputs
    selectedGender = "";
    selectType ="";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}
function setGender(gender) {
    selectedGender = gender;
    document.getElementById("maleButton");
    document.getElementById("femaleButton");
}
function setType(type){
    selectType = type;
    document.getElementById("personalButton");
    document.getElementById("workButton");
}
