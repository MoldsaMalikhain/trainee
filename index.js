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