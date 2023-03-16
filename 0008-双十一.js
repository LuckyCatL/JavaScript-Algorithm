const readline = require("readline");

function main(arr,num){
    let sum = []
    let res = []
    if(arr.length>=3){
        if(arr.sort(function(a,b){return a-b})[0]>num){
            return -1
        }else{
            for(let i=0;i<arr.length;i++){
                for(let j=i+1;j<arr.length;j++){
                    for(let k=j+1;k<arr.length;k++){
                        sum.push(arr[i]+arr[j]+arr[k])
                    }
                }
            }
            for(let m=0;m<sum.length;sum++){
                if(sum[m]<=num){
                    res.push(sum[m])
                }
            }
            if(res.length===0){
                return -1
            }else{
                res.sort(function(a,b){return b-a})
                //console.log(res[0])
                return(res[0])
            }
        }
    }else{
        return -1
    }
    //console.log()
}

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on('line',function(line){
    lines.push(line.split(',').map(Number))
    if(lines.length===2){
        console.log(main(lines[0],lines[1]))
        rl.close()
    }
})

rl.on('close',function(){
    process.exit(0)
})
//main([23,30,40],26)