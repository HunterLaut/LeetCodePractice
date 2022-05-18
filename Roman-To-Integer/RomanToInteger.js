/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const myArray = s.split('')
    var x= 0;
    for (var i = 0; i < myArray.length; i++){
        console.log(myArray[i]);
        switch(myArray[i]){
            case ('I'): 
                switch(myArray[i+1]){
                    case ('V'): x+=4; i++; break;
                    case ('X'): x+=9; i++; break;
                    default: x+=1; break;
                }
                break;
            case ('V'): x+=5; break;
            case ('X'): 
                switch(myArray[i+1]){
                    case ('L'): x+=40; i++; break;
                    case ('C'): x+=90; i++; break;
                    default: x+=10; break;
                }
                break;
            case ('L'): x+=50; break;
            case ('C'): 
                switch(myArray[i+1]){
                    case ('D'): x+=400; i++; break;
                    case ('M'): x+=900; i++; break;
                    default: x+=100; break;
                }
                break;
            case ('D'): x+=500; break;
            case ('M'): x+=1000; break;
        }
    }
    return x;
};
