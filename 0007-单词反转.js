const readline = require("readline");

function main(arr1,num1,num2){
    //let arr1 = String.split(' ')
    let arr2=[]
    for(let i=num2;i>=num1;i--){
        arr2.push(arr1[i])
    }
    //console.log(arr2)
    var res = arr2.join(' ')
    return res.trim()
}

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const lines=[]
rl.on('line',function(line){
    lines.push(line.split(' '))
    //console.log(lines)
    if(lines.length===3){
        console.log(main(lines[0],lines[1][0],lines[2][0]))
        rl.close()
    }
    
})

rl.on('close',function(){
    process.exit(0)
})
//main('hello world!',0,3)
