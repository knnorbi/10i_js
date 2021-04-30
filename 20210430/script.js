function validate() {
    document.getElementById("nameLabel").style.color = "black";
    document.getElementById("ageLabel").style.color = "black";
    
    var vaild = true;
    
    if(document.getElementById("nameInput").value == "") {
        alert("Name is missing.");
        document.getElementById("nameLabel").style.color = "red";
        vaild = false;
    }
    
    var age = document.getElementById("ageInput").value;
    if(age < 1 || age > 120) {
        alert("Age is wrong.");
        document.getElementById("ageLabel").style.color = "red";
        valid = false;
    }
    
    return vaild;
}