// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

// 1! = 1
// n! = n * (n-1)!

// FIB
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ....
// fib(1) = 0
// fib(2) = 1
// fib(n) = fib(n-1) + fib(n-2)

function factor() {
    var n = document.getElementById("n").value;
    //var prod = n;
    //while ((n - 1) > 0) {
    //    prod = prod * (n - 1);
    //    n--;
    //}
    
    //var prod = 1;
    //for(var i = 2; i <= n; i++) {
    //    prod *= i;
    //}
    
    document.getElementById("factor").innerHTML = recfact(n);
}

function recfact(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * recfact(n-1);
    }
}