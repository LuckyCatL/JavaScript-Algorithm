const readline = require("readline");

function fg(String) {
    var m = String.replace(/[MGT]/g, function (a) {
        return a + ' '
    })
    var n = m.trim().split(' ')
    return n
}

function Sum(arr) {
    let sum = 0
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].slice(-1) === "M") {
            num = Number(arr[i].slice(0, -1))
        } else if (arr[i].slice(-1) === "G") {
            num = Number(arr[i].slice(0, -1)) * 1024
        } else if (arr[i].slice(-1) === "T") {
            num = Number(arr[i].slice(0, -1)) * 1024 * 1024
        }
        sum = sum + num
    }
    //console.log(sum)
    return sum
}

//fg('3M12G9M')
//Sum(['1G','2M','3M'])

function main(num, arr) {
    let sum = []
    for (let i = 0; i < num; i++) {
        let newArr = fg(arr[i])
        sum.push(Sum(newArr))
    }
    // console.log(sum)
    // console.log(arr)
    for (let i = 0; i < num; i++) {
        for (let j = i + 1; j < num; j++) {
            if (sum[i] > sum[j]) {
                let b = sum[i]
                sum[i] = sum[j]
                sum[j] = b

                let a = arr[i]
                arr[i] = arr[j]
                arr[j] = a
            }

        }
    }
    //console.log(arr)
    return arr
    //console.log(sum)
}

//main(5,['1T','20M','3G','10G6T','3M12G9M'])

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var lines = []
rl.on('line', function (line) {
    lines.push(line)
    if (lines.length === 1 + Number(lines[0][0])) {
        let arr = []
        for (let i = 1; i <=  Number(lines[0][0]); i++) {
            arr.push(lines[i])
        }
        var result = main(Number(lines[0][0]), arr)
        for(let i=0;i<result.length;i++){
            console.log(result[i])
        }
        rl.close()
    }
})

rl.on('close', function () {
    process.exit(0)
})