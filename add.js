 function add(num1, num2) {
     return num1 + num2
     
 }
 console.log(add(1,2))

 function add(){
     var sum = 0;
     for (i = 0; i < arguments.length; i++){
         sum += arguments[i];
     }
     return sum;
 }
 console.log(add(1,2,3,4,5,6))