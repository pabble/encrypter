
// pabble's encrypter v1.0 | (c) 2020 Pabble Studios, Inc. | https://pabble.github.io/


var unicode = [];
for (i = 0; i < 1114112; i++) { unicode.push(String.fromCharCode(i)); };


function encrypt (input, seed) {

    var array = stringtoarray(input);
    var sum = seed.dec;
    var bins = stringtoarray(seed.bin);

    for (var i = 0; i < array.length; i++){
    
        var currentIndex = searchChar(array[i], unicode);
        var newIndex;
    
        if (bins[redux(i, bins.length)] == 1){
            newIndex = currentIndex + sum;
            newIndex = redux(newIndex, unicode.length);
        }else{
            newIndex = currentIndex - sum;
            newIndex = redux(newIndex, unicode.length);
        }

        array[i] = unicode[newIndex];
    
    }

    return arraytostring(array);

}



function decrypt (input, seed){

    var array = stringtoarray(input);
    var sum = seed.dec;
    var bins = stringtoarray(seed.bin);

    for (var i = 0; i < array.length; i++){
    
        var currentIndex = searchChar(array[i], unicode);
        var newIndex;
    
        if (bins[redux(i, bins.length)] == 1){
            newIndex = currentIndex - sum;
            newIndex = redux(newIndex, unicode.length);
        }else{
            newIndex = currentIndex + sum;
            newIndex = redux(newIndex, unicode.length);
        }

        array[i] = unicode[newIndex];
    
    }

    return arraytostring(array);

}



//functions
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

function redux(y, range){ 
    var x = y;
    if (x > range){
        while (x > range){
            x -= range;
        }
    }else if (x < 0){
        while (x < 0){
            x += range;
        }
    }
    return x;
}

function searchChar(char, array){
    for (var i = 0; i < array.length; i++){
        if (char == array[i]){
            return i;
        }
    }
    return undefined;
}