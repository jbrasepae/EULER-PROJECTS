function reverseStr(str) {
    var strResult = "";
    for(var i = str.length - 1; i > 0; i--){
        strResult += str[i];
    }
    return strResult;
}
console.log(reverseStr("Tumi is smart"))