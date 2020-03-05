var unicode = [];
for (i = 0; i < 1114112; i++) { unicode.push(String.fromCharCode(i)); };

var seed = {
    dec: 777,
    bin: 0100100
}

function encrypt (string, seed) {
    var encrypted = string;
    var signs = stringtoarray(seed.bin);
    var arrayed = stringtoarray(string);

    for (var i = 0; i < signs.length; i++){
        if (signs[i] == 1){
            signs[i] = true;
        }else{
            signs[i] = false;
        }
    }

    for (var i = 0; i < string.length; i++){
        var sign;
        var sd = seed.dec;
        
        
    }

    return "encrypted: " + encrypted;
}

console.log(encrypt("penis", seed));

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