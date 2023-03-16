const readline = require("readline");

function getMinIndex(arr) {
    let min = arr[1]
    let minIndex = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != -1) {
            if (min > arr[i]) {
                min = arr[i]
                minIndex = i
            }
        }
    }

    return minIndex
}

function main(arr) {
    let arr1 = []
    let min = getMinIndex(arr) + 1
    arr.unshift('NA')
    arr.splice(min + 1)
    for (let i = arr.length-1; i > 0;) {
        arr1.push(arr[i])
        if (i % 2 === 0) {
            i = i / 2
        } else if (i % 2 === 1) {
            i = (i - 1) / 2
        }

        //console.log(i)

    }
    // console.log(arr1)
    return arr1.reverse()
}


const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//const lines=[]
rl.on('line',function(line){
    let result = main(line.split(' ').map(Number))
    console.log(result.join(' '))
    rl.close()
})

rl.on('close',function(){
    process.exit(0)
})

// main([3,5,7,-1,-1,2,4])
//main([5, 9, 8, -1, -1, 7, -1, -1, -1, -1, -1, 6])
// main([5,4,3,2,1])