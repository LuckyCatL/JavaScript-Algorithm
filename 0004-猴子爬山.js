const readline = require("readline");

function main(n){
    if(n==1){
        return 1
    }else if(n==2){
        return 1
    }else if(n==3){
        return 2
    }else{
        return main(n-1)+main(n-3)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line',function(line){
    let num = main(line)
    console.log(num)
    rl.close()
})

rl.on('close',function(){
    process.exit(0)
})