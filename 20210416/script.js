var szoveg = "    Szülei kocsmárosok voltak a Parmához közeli Busseto melletti Le Roncole falucskában. ";

// Szülei
//var szoveg2 = szoveg.slice(0, 6);

// falucskában
//var szoveg2 = szoveg.slice(-12, -1);

// kocsmárosok voltak a Parmához közeli Busseto melletti Le Roncole falucskában.
//var szoveg2 = szoveg.slice(7);

// falucskában.
//var szoveg2 = szoveg.slice(-12);

// Szülei
//var szoveg2 = szoveg.substring(0, 6);    // Ua. mint a slice, csak nincs negativ.

// kocsmárosok
//var szoveg2 = szoveg.substr(7, 11);

//var szoveg2 = szoveg.replace("kocsmárosok", "boltosok");

//var szoveg2 = szoveg.toLowerCase();
//var szoveg2 = szoveg.toUpperCase();


var szoveg2 = szoveg.trim();
//alert(szoveg.length - szoveg2.length);

document.getElementById("szoveg").innerHTML = szoveg2;

function toList() {
    var txt = document.getElementById("listaSzoveg").value;
    var list = txt.split(",");
    var tmp = "";
    for(var i = 0; i < list.length; i++) {
        list[i] = list[i].trim();
        tmp += "<li>" + list[i] + " " + list[i].length + "</li>";
    }
    document.getElementById("lista").innerHTML = tmp;
}