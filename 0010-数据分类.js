const readline = require("readline");

// var size = 256;
// var sizeBytes = Buffer.alloc(4);
// sizeBytes.writeUInt32LE(size, 0);

// console.log(sizeBytes);

//处理数据，将数组转化为4个字节
function buffZh(num) {
    let byte = Buffer.alloc(4)
    byte.writeUInt32LE(num, 0)
    let sum = byte[0] + byte[1] + byte[2] + byte[3]
    return sum
}

function main(arr) {
    let arr1 = []
    let arr2 = []
    let sum = []
    for (let i = 2; i < 12; i++) {
        arr1.push(buffZh(arr[i]))
    }
    for (let j = 0; j < 10; j++) {
        // if ((arr1[j] % arr[1]) < arr[0]) {
        //     arr2.push(arr1[j]%arr[1])
        //     arr2.sort(function (a, b) { return b - a })
        // }
        arr2.push(arr1[j] % arr[1])
        arr2.sort(function (a, b) { return b - a })

    }
    for (let k = 0; k < arr[0]; k++) {
        sum.push(0)

    }

    for (let m = 0; m < arr2.length; m++) {
        for (let n = 0; n < arr[0]; n++) {
            if (arr2[m] === n) {
                sum[n]++
            }
        }
    }
    sum.sort(function(a,b){return b-a})
    return sum[0]
}

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//const lines=[]
rl.on('line',function(line){
    console.log(main(line.split(' ').map(Number)))
    
    rl.close()
})

rl.on('close',function(){
    process.exit(0)
})
// var a = [3, 4, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265]
// main(a)