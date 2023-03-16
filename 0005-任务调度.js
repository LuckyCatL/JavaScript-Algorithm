const readline = require("readline");

function main(num1,num2,arr){
    //console.log(arr)
    let time = 0
    for(let i = 0;i<num2;i++){
        if(arr[i]>num1){
            if(i+1>=num2){
                arr.push(0)
            }
            arr[i+1]=arr[i+1]+(arr[i]-num1)
            arr[i]=3
        }
    }
    //console.log(arr)
    if(arr.length>num2){
        if(arr[num2]%num1===0){
            time = time + 5 + (arr[num2]/num1)
        }else{
            time = time + 5 + Math.ceil(arr[num2]/num1)
            //console.log(Math.ceil(arr[num2]/num1))
        }
    }else{
        time = time + num2
    }
    console.log(time)
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines=[]
rl.on('line',function(line){
    let le = line.split(' ').map(Number)
    lines.push(le)
    if(lines.length===3){
        let arr1 = []
        for(let j = 0;j<lines[1][0];j++){
            arr1.push(lines[2][j])
        }
        //console.log(arr1)
        let a = lines[0][0];
        let b = lines[1][0];
        main(a,b,arr1)
        rl.close()
    }
})

rl.on('close',function(){
    process.exit(0)
})

// var num1 = 4
// var num2 = 5
// var arr = [5,4,1,1,1]

// main(num1,num2,arr)