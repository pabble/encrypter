var unicode = [];
for (i = 0; i < 1114112; i++) { unicode.push(String.fromCharCode(i)); };

var seed = {
    dec: 777,
    bin: 1001011001
}

function encrypt (input, seed) {
    var array = stringtoarray(input);
    var bins = stringtoarray(seed.bin);

    for (var i = 0; i < array.length; i++){
        // if (bins[i])
    }

    return arraytostring(array);
}

console.log("encrypted: " + encrypt("pÄnis", seed));






function offsetarray (array, index, sum, sign){
    var result = 0;
    if (sign == 1){
        var result = index + sum;
    }else{
        var result = index - sum;
    }

    if (sign == 1) {
        if (result > array.length){
            while (result > array.length){
                result -= array.length;
            }
        }
    }

    if (sign == 0) {
        if (result < 0){
            while (result < 0){
                result += array.length;
            }
        }
    }

    return result;
}

function stringtoarray(string){
    var arr = [];
    for (var i = 0; i < string.length; i++){
        arr.push(string.charAt(i));
    }
    return arr;
}

function arraytostring(array){
    var str = "";
    for (var i = 0; i < array.length; i++){
        str = str + array[i];
    }
    return str;
}

function redux(x, y){
    
}