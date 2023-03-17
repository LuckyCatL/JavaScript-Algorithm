const readline = require("readline");

function main(arr) {
    let area = 0
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                area = arr[j] * (j - i)
            } else if (arr[i] <= arr[j]) {
                area = arr[i] * (j - i)
            }
            arr1.push(area)
        }
    }
    //console.log(arr1) 
    arr1.sort(function (a, b) { return b - a })
    return arr1[0]
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// const lines = []
rl.on('line', function (line) {
    let lines = line.split(',').map(Number)
    //console.log(lines)
    let result = main(lines)
    console.log(result)
    rl.close()


})

rl.on('close', function () {
    process.exit(0)
})

//main([10,9,8,7,6,5,4,3,2,1])