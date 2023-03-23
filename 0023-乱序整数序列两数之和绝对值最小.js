const readline = require("readline");

function main(arr){
    let arr1 =[]
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            arr1.push(Math.abs(arr[i]+arr[j]))
        }
    }

    arr1.sort(function(a,b){return a-b})
    
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(Math.abs(arr[i]+arr[j])===arr1[0]){
                return [arr[i],arr[j],arr1[0]]
            }
        }
    }
}

// var a= main([-1,-3,7,5,11,15])
// console.log(a)

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(line){
    let lines = line.split(' ').map(Number)
    //console.log(lines)
    var result = main(lines)
    console.log(result.join(' ').trim())
    rl.close()
})

rl.on('close',function(){
    process.exit(0)
})