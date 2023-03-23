const readline = require("readline");

function main(num,arr1,arr2){
    let troops = []
    for(let k = 1;k<=num;k++){
        troops.push(k)
    }
    for(let i=0;i<num;i++){
        for(let j=i+1;j<num;j++){
            if(arr1[i]>arr1[j]){
                let a=arr1[i]
                arr1[i] = arr1[j]
                arr1[j] = a 

                let b = troops[i]
                troops[i] = troops[j]
                troops[j] = b

                let c = arr2[i]
                arr2[i] = arr2[j]
                arr2[j] = c
            }else if(arr1[i]===arr1[j]){
                if(arr2[i]>arr2[j]){
                    let m = arr2[i]
                    arr2[i] = arr2[j]
                    arr2[j] = m
                    
                    let n = arr1[i]
                    arr1[i] = arr1[j]
                    arr1[j] = n

                    let l = troops[i]
                    troops[i] = troops[j]
                    troops[j] = l
                }
            }
        }
    }

    //console.log(troops)
    return troops.join(' ').trim()
}

//main(4,[100,100,120,130],[40,30,60,50])
//main(3,[90,110,90],[45,60,45])

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on('line',function(line){
    lines.push(line.split(' ').map(Number))
    if(lines.length === 3){
        var result = main(lines[0][0],lines[1],lines[2])
        console.log(result)
        rl.close()
    }
})

rl.on('close',function(){
    process.exit(0)
})