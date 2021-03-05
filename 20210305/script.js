var numbers = [4, 8, 15, 16, 23, 42];
var txt = "";

function printNumbers() {
    numbers = numbers.map(modify);
    numbers = numbers.filter(filterCallBack);
    
    txt += "<table border><tr>";
    numbers.forEach(createTD);
    txt += "</tr></table>";
    
    var elemet = document.getElementById("numbers");
    elemet.innerHTML = txt;
}

function createTD(value, index, array) {
    if (index % 3 == 0) {
        txt += "</tr><tr>";
    } 
    txt += "<td>" + value + "</td>";
}

function modify(value, index, array) {
    return value + index;
}

function filterCallBack(value, index, array) {
    return value > 10;
}