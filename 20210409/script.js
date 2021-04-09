var szoveg = "KocsmároSOK. Szülei kocsmárosok voltak a Parmához közeli Busseto melletti Le Roncole falucskában.";

var eleje = szoveg.search(/kocsmárosok/i);

for (var i = eleje; i < szoveg.length; i++) {
    document.getElementById("szoveg").innerHTML += szoveg[i] + "<br>";
}

function find() {
    var keres = document.getElementById("keres").value;
    var elso = szoveg.indexOf(keres);
    var utolso = szoveg.lastIndexOf(keres);
    
    if (elso == -1) {
        alert("Nem szerepel.");
    }
    else if (elso == utolso) {
        alert("Csak egyszer szerepel.");
    }
    else {
        alert("Többször szerepel.");
    }
}