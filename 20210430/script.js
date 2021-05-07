function validate() {
    document.getElementById("nameLabel").style.color = "black";
    document.getElementById("ageLabel").style.color = "black";
    
    document.getElementById("nameHint").style.display = "none";
    document.getElementById("ageHint").style.display = "none";
    document.getElementById("agreeHint").style.display = "none";
    
    var valid = true;
    
    if(document.getElementById("nameInput").value == "") {
        document.getElementById("nameHint").style.display = "inline";
        document.getElementById("nameLabel").style.color = "red";
        valid = false;
    }
    
    var age = document.getElementById("ageInput").value;
    if(age < 1 || age > 120) {
        document.getElementById("ageHint").style.display = "inline";
        document.getElementById("ageLabel").style.color = "red";
        valid = false;
    }
    
    if(document.getElementById("agree").checked == false) {
        document.getElementById("agreeHint").style.display = "inline";
        valid = false;
    }
    
    return valid;
}