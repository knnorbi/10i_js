var tomb = ["alma", "korte", "banan", 42];

function gyumi() {
    tomb[3]++;
    tomb.push("eper");
    tomb[10] = "kiwi";
    //document.getElementById("gyumolcs").innerHTML = tomb;
    
    //var tmp = "";
    //for(var i = 0; i < tomb.length; i++) {
    //    tmp += tomb[i] + "<br>";
    //}
    //document.getElementById("gyumolcs").innerHTML = tmp;
    
    tomb.pop();
    tomb.shift();
    
    for(var i = 0; i < tomb.length; i++) {
        document.getElementById("gyumolcs").innerHTML += tomb[i] + "<br>";
    }
}