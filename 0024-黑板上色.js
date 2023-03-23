const readline = require('readline')

function main(num, arr) {
    arr.sort(function (a, b) {
        return a - b
    })

    let sum = 0

    for (let j = 0; j < 100; j++) {
        let arr1 = []
        for (let i = 0; i < num; i++) {
            if (arr[i] % arr[0] === 0) {
                arr1.push(arr[i])

            }
        }
        arr = arr.filter(function (item1) {
            return !arr1.some((item2) => item1 === item2)
        })

        sum++
        if(arr.length===0){
            break;
        }
    }

   // console.log(sum)
    return sum
}

//main(3,[2,4,6])
//main(4, [2, 3, 4, 9])
//main(8,[2,3,4,5,6,7,8,9])

//2,4,6,8
//3,9
//5
//7

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on('line',function(line){
    lines.push(line.split(' ').map(Number))
    if(lines.length===2){
        var result = main(lines[0][0],lines[1])
        console.log(result)
        rl.close()
    }
})

rl.on('close',function(){
    process.exit(0)
})