var tomb = ["alma", "korte", "banan"];
var masik = ["malna", "eper"];
var harmadik = ["szilva", "dinnye"];

function gyumi() {
    //var poppoltElem = tomb.pop();
    //alert(poppoltElem);
    //while (tomb.length > 0) {
    //    alert(tomb.pop());
    //}
    
    //tomb.push("banan");
    //tomb.push("szilva");
    
    //tomb.shift();
    //tomb.unshift("kiwi");
    
    //tomb[1] = "barack";
    //tomb[tomb.length] = "ananasz";
    
    //delete tomb[0];
    
    //tomb.splice(1, 0, "barack", "eper", "malna");
    //tomb.splice(4, 2);
    
    var eredmeny = tomb.concat(masik, harmadik);
    
    eredmeny = eredmeny.slice(1, 3);
    
    document.getElementById("gyumolcs").innerHTML = eredmeny.join("<br>");
    
}