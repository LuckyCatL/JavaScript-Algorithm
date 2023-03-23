const readline = require("readline");

function lastSeven(arr){
    let sum = eval(arr.join('+'))
    let sumSeven = 0
    for(let i=1;i<=200; i++){
        if(i%7===0 || i%10===7){
            sumSeven ++
            //console.log(sumSeven)
            if(sumSeven===sum){
                return i
                // console.log(i)
                // break;
            }
        }
    } 
}

function main(arr){
    let sum = lastSeven(arr)
    //console.log(sum)
    let arr1 = []
    for(let i=0;i<arr.length;i++){
        arr1.push(0)
    }
    
    for(let j=1;j<=sum;j++){
        if(j%7===0 || j%10===7){
            let k = j%arr.length
            arr1[k-1]++
        }
    }
    return arr1.join(' ')
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var lines = []
rl.on('line', function (line) {
    lines = line.split(' ').map(Number)
    //console.log(lines)
    let result = main(lines)
    console.log(result)
    rl.close()
})

rl.on('close', function () {
    process.exit(0)
})



//main([0,0,0,2,1])
// console.log(a)