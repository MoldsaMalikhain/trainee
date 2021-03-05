comparison = (inputArr) => {
    let result = [];
    if (inputArr.lenght < 3) return 0;

    if (inputArr.length === 3) {
        let i = 0;
        if (inputArr[i] < inputArr[i + 1] && inputArr[i + 1] > inputArr[i + 2]) {
            result.push(1);
        }
        else if (inputArr[i] > inputArr[i + 1] && inputArr[i + 1] < inputArr[i + 2]) {
            result.push(1);
        }
        else {
            console.log(0);
        }
    }

    if (inputArr.length > 3) {
        let strictLength = inputArr.length - 2;
        for (let i = 0; i < strictLength; i++) {
            if (inputArr[i] < inputArr[i + 1] && inputArr[i + 1] > inputArr[i + 2]) {       //}
                result.push(1);                                                             //}  inputArr[i] < inputArr[i+1] && inputArr[i+1] > inputArr[i+2] || inputArr[i] > inputArr[i+1] && inputArr[i+1] < inputArr[i+2]
            }                                                                               //}
            else if (inputArr[i] > inputArr[i + 1] && inputArr[i + 1] < inputArr[i + 2]) {  //}
                result.push(1);
            }
            else {
                result.push(0);
            }
        }
    }
    console.info(result)
    return result;
}

findInMatrycks = (inputMatrycks) => {
    let tempAreas = [];
    let tempResult = [];
    let result = [];

    if (inputMatrycks.length != 3 || inputMatrycks[0].length < 3) return 0;
    else {
        const strictLength = 3;
        let counter = 0;
        let floatLength = inputMatrycks[0].length;

        for (let mainLoop = 0; mainLoop < floatLength; mainLoop++) {
            for (let row = 0; row < strictLength; row++) {
                for (let step = mainLoop; step < strictLength + mainLoop; step++) {
                    tempAreas.push(inputMatrycks[row][step])
                }
                counter++
            }
            for (let checkValues = 1; checkValues < 10; checkValues++) {
                tempResult.push(tempAreas.includes(checkValues));
            }
            result.push(tempResult.includes(false) ? false : true);

                // console.table(tempAreas);  
                // console.table(tempResult);

            tempResult = [];
            tempAreas = [];
        }
            // console.log(counter)  //Количество итераций

        console.table(result)
        return result;

    }
}
let result = [];

textEditing = (inputText, inputRules) =>{
    let step = 0;
    let sliced;

    for(let rulesStep = 0; rulesStep < inputRules.length; rulesStep++){
        let textText = [inputText[rulesStep].join(' ')];
        switch(inputRules[rulesStep]){
            case 'LEFT':
                console.log("LEFT");
                slicedForLong = [];
                sliced = textText[0].split('');
                if(sliced.length > 16){
                    sliced = separate(sliced);
                    for(let loopStep = 0; loopStep < sliced.length; loopStep++){
                        step = 16 - sliced[loopStep].length;
                        slicedForLong.push(sliced[loopStep])
                        for(let loop = 0; loop < step; loop++){
                            slicedForLong.push(' ');
                        }
                        slicedForLong.push('*');
                        slicedForLong.unshift('*');
                        result.push(slicedForLong.join(''))
                        slicedForLong = [];
                    }
                }else{
                    step = 16 - sliced.length
                    for(let loop = 0; loop < step; loop++){
                        sliced.push(' ');
                    }
                    sliced.push('*');
                    sliced.unshift('*');
                    result.push(sliced.join(''));
                }    

                break;
            case 'RIGHT':
                console.log("RIGHT");
                slicedForLong = []
                sliced = textText[0].split('');
                
                if(sliced.length > 16){
                    sliced = separate(sliced);
                    for(let loopStep = 0; loopStep < sliced.length; loopStep++){
                        step = 16 - sliced[loopStep].length;
                        slicedForLong.push(sliced[loopStep])
                        for(let loop = 0; loop < step; loop++){
                            slicedForLong.unshift(' ');
            
                        }
                        slicedForLong.push('*');
                        slicedForLong.unshift('*');
                        result.push(slicedForLong.join(''))
                        slicedForLong = [];
                    }
                }else{
                    step = 16 - sliced.length
                    for(let loop = 0; loop < step; loop++){
                        sliced.unshift(' ');
                    }
                    sliced.push('*');
                    sliced.unshift('*');
                    result.push(sliced.join(''));
                } 
                // result.push([right(textText[0])]);
                break;
            default:
                console.log('Please enter editing rules')
                break;
        }
    }
    result.push('******************');
    result.unshift('******************');
    console.table(result);
    
    return result;
}

function separate(someText){
    let tempResult = [];
    let sliced = [];
    let sepText = someText;
    step = 16;
    while(true){
        if(sepText[step] == ' ') {
            sliced = sepText.splice(step)
            sliced.shift();
            tempResult.push(sepText.join(''), sliced.join(''));
            break;
        }            
        step--;
    }
    return tempResult;
}

// function left(someText){
//     slicedForLong = [];
//     let sliced = someText.split('');
//     if(sliced.length > 16){
//         sliced = separate(sliced);
//         console.table(sliced)
//         for(let loopStep = 0; loopStep < sliced.length; loopStep++){
//             step = 16 - sliced[loopStep].length;
//             slicedForLong.push(sliced[loopStep])
//             for(let loop = 0; loop < step; loop++){
//                 slicedForLong.push(' ');
//             }
//             console.table(sliced[loopStep])
//             result.push(tslicedForLong.join(''))
//             slicedForLong = [];
//         }
//     }else{
//         step = 16 - sliced.length
//         for(let loop = 0; loop < step; loop++){
//             sliced.push(' ');
//         }
//         result.push(sliced.join(''));
//     }    
// }
// function right(someText){
//     slicedForLong = []
//     let sliced = someText.split('');
    
//     if(sliced.length > 16){
//         sliced = separate(sliced);
//         console.table(sliced)
//         for(let loopStep = 0; loopStep < sliced.length; loopStep++){
//             step = 16 - sliced[loopStep].length;
//             slicedForLong.push(sliced[loopStep])
//             for(let loop = 0; loop < step; loop++){
//                 slicedForLong.unshift(' ');

//             }
//             console.table(sliced[loopStep])
//             result.push(slicedForLong.join(''))
//             slicedForLong = [];
//         }
//     }else{
//         step = 16 - sliced.length
//         for(let loop = 0; loop < step; loop++){
//             sliced.unshift(' ');
//         }
//         result.push(sliced.join(''));
//     } 
// }

let text = [
    ["Hello", "world"],
    ["Brad", "came", "to", "dinner", "with", "us"],
    ["He", "loves", "tacos"]
];
let rules = ["LEFT", "RIGHT", "LEFT"];

textEditing(text, rules);

// let input = [
//     [1, 2, 3, 2, 7],
//     [4, 5, 6, 8, 1],
//     [7, 8, 9, 4, 5],
// ]
//findInMatrycks(input);

// comparison([2,1,1,5,6])
// comparison([1,6,5,2,1,7]);
// comparison([6,1,1,8,6])
// comparison([1,8,7,8,5,7]);
// comparison([2,8,1,5,1])
// comparison([3,5,1,7,2,7]);
// comparison([8,4,9,2,1])
// comparison([1,6,5,2,5,9,1,5]);
