function fib(n){
    if (n == 1){
        return 1
    } else if (n == 0){
        return 0
    } else {
        return fib(n-1) + fib(n-2)
    }
}

for (n = 0; n < 10; n ++){
    console.log(n, fib(n))
}