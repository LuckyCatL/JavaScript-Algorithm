const readline = require("readline");

function main(num,arr){
    //let newArr = [...new Set(arr)]
    //arr.split('')
    //console.log(arr)
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let sum = 0
    for(let i = 0;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            arr1.push(i)
        }
    }
    //console.log(arr1)
    for(let j =0;j<arr1.length;j++){
        let m =arr1[j]
        let n = arr1[j+1]
        arr2 .push(arr.slice(m,n)) 
    }
    for(let k =0;k<arr2.length;k++){
        if(arr2[k].length>=num && !arr3.includes(arr2[k][0])){
            arr3.push(arr2[k][0])
            sum++
        }
    }
    if(sum>0){
        return sum
    }else{
        return -1
    }
    //console.log(arr3)
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lines = []
rl.on('line', function (line) {
    lines.push(line)
    //console.log(lines)
    if(lines.length===2){
        let result = main(parseInt(lines[1]),lines[0])
        console.log(result)
        rl.close()
    }

})

rl.on('close', function () {
    process.exit(0)
})


// var a= main(2,['AABAAA'])
// console.log(a)