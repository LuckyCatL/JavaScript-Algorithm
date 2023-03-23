const readline = require('readline')

function main(arr){
    let newArr =[]
    let newArrGw = []
    for(let i=0;i<arr.length;i++){
       newArr.push(Math.abs(arr[i]))
    }
    //console.log(newArr)

    for(let i=0;i<newArr.length;i++){
        //console.log()
        if(String(newArr[i]).length-1===0){
            newArrGw.push(newArr[i]%10)
        }else{
            newArrGw.push(newArr[i]%(10**(String(newArr[i]).length-1)))
        }
        
    }
    //console.log(newArrGw)


    //插入排序
    for(let i=0;i<arr.length;i++){
        let temp =newArrGw[i];
        let temp2 = arr[i]
        let j = i-1
        while(j>=0 && newArrGw[j]>temp){
            newArrGw[j+1] = newArrGw[j]
            arr[j+1] = arr[j]
            j--
        }
        newArrGw[j+1]=temp
        arr[j+1]=temp2        
    }

   //console.log(arr)
   return arr
}

//main([1,2,5,-21,22,11,55,-101,42,8,7,32])

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(line){
    let lines = line.split(',').map(Number)
    var result = main(lines)
    console.log(result.join(',').trim())
    rl.close()
})

rl.on('close',function(){
    process.exit(0)
})

