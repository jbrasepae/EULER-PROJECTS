function multiples(num) {
    var sum = 0;
    for(i = 0; i < 100; i++){
        if(num % 3 === 0 || num % 5 === 0){
            sum = sum +1;
        }
    }
    return sum;  
}

console.log(multiples(100))