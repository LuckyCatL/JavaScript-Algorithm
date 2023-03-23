const readline = require("readline");


function px(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].length < arr[j].length) {
                let arr1 = arr[j]
                arr[j] = arr[i]
                arr[i] = arr1
            }
        }
    }
    return arr[0].length
}

function main(num, arr) {
    let arrRes = []
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    newArr.push(arr)
    let n = px(newArr)
    //console.log(arr)
    let arr1 = []
    for (let k = 0; k < n / num + 1; k++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length >= num) {
                arr1 = arr[i].splice(0, num)
                for (let j = 0; j < num; j++) {
                    arrRes.push(arr1[j])
                }
            } else if (0 < arr[i].length < num) {
                arr1 = arr[i].splice(0, arr[i].length)
                for (let j = 0; j < arr1.length; j++) {
                    arrRes.push(arr1[j])
                }

            } else {
                continue;
            }
            //console.log(arrRes)
        }


    }


    return arrRes.join(',')
}

// main(3,[[2,5,6,7,9,5,7],[1,7,4,3,4]])
// //main(4,[[1,2,3,4,5,6],[1,2,3],[1,2,3,4]])
// //main(3,[[1,2,3,4],[1,2]])
// //px([[1, 2, 3], [1, 2], [1, 2, 3, 4]])

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var lines = []
rl.on('line', function (line) {
    lines.push(line.split(',').map(Number))
    //console.log(lines.length)
    if (lines.length >= 2) {
       // console.log(lines.length)
        if (lines.length === 2 + lines[1][0]) {
            //console.log('aaaaaa')
            let arr = []
            for (let i = 2; i <= lines[0][0]; i++) {
                arr.push(lines[i])
            }
            var result = main(lines[0][0], arr)
            console.log(result)
            rl.close()
        }
    }
})

rl.on('close', function () {
    process.exit(0)
})