const readline = require("readline");

function main(arr, num) {
    //console.log(arr)
    arr.sort(function (a, b) { return a - b })
    var a = 0
    var sum = 0
    //console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (a + arr[i] <= num) {
            a = a + arr[i]
            sum++
        }
    }
    return sum
    // console.log(sum)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lines = []
rl.on('line', function (line) {
    lines.push(line.split(',').map(Number))
    //console.log(lines)
    if (lines.length === 2) {
        let result = main(lines[0], lines[1][0])
        console.log(result)
        rl.close()
    }

})

rl.on('close', function () {
    process.exit(0)
})

// main([5,10,2,11],20)