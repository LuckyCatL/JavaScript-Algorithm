const readline = require("readline");

function px(num,arr){
    arr.splice(num,1)
    arr.sort()
    arr.sort(function(a,b){return b.length-a.length})
    //console.log(arr)
    return arr
}

//px(0,['word','dd','da','dc','dword','d'])
function main(num,arr){
    let firstWord = arr[num]
    let newArr = px(num,arr)
    for(let i=0;i<arr.length;i++){
        if(newArr[i][0]===firstWord[firstWord.length-1]){
            firstWord = firstWord + newArr[i]
            newArr[i]=" "
            //console.log(newArr)
        }
    }
    return firstWord
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lines = []
rl.on('line', function (line) {
    lines.push(line)
    let arr = []
    for(let i=0;i<parseInt(lines[1]);i++){
        arr.push(lines[i+2])
    }
    if(lines.length == 2+parseInt(lines[1])){
        console.log(main(parseInt(lines[0]),arr))
        rl.close()
    }

})

rl.on('close', function () {
    process.exit(0)
})

// main(1,['word','dd','da','dc','dword','d'])