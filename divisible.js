function divisible(n,x,y){
    if(n % x === 0 && n % y === 0 ){
        return true;
    }
    else{
        return false;
    }
}
console.log(divisible(12,1,5))