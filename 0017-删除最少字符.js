const readline = require("readline");

function main(arr){
    let arr1 = [...new Set(arr)]
    let arr3 = []
    let arr4 = []
    arr = arr.split('')
    //console.log(arr1)
    for(let i=0;i<arr1.length;i++){
        var arr2 = arr.filter(function(item){
            return item==arr1[i]
        })
        arr3.push(arr2.length)
    }

    var a = arr3[0]
    //var minIndex = 0
    for(let j=0;j<arr3.length;j++){
        if(a>arr3[j]){
            a = arr3[j]
            //minIndex = j
        }
    }
    for(let k=0;k<arr3.length;k++){
        if(arr3[k]===a){
            arr4.push(arr1[k])
        }
    }
    for(let l=0;l<arr4.length;l++){
        arr = arr.filter(function(item){
            return item !== arr4[l]
        })
    }
    if(arr.length>0){
        return arr.join('')
    }else{
        return 'empty'
    }
   
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// var lines = []
rl.on('line', function (line) {
    
    let result = main(line)
    console.log(result)
    rl.close()
})

rl.on('close', function () {
    process.exit(0)
})

// main('bbaccdd')