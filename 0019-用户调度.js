const readline = require("readline");

function min(arr){
    var arr1 = []
    if(arr[2]<=arr[0] && arr[2]<=arr[1]){
        //console.log(arr[2])
        arr1[0]=2
        arr1[1]=arr[2]
    }else if( arr[1]<=arr[0] && arr[1]<=arr[2]){
        arr1[0]=1
        arr1[1]=arr[1]
    }else if(arr[0]<=arr[1] && arr[0]<=arr[2]){
        arr1[0]=0
        arr1[1]=arr[0]
    }

    return arr1
}

function min2(num,arr){
    let arr1 = []
    var a = 0
    for(let j=0;j<3;j++){
        arr1.push(arr[j])
    }
    arr1.splice(num,1)
    //console.log(arr)
    if(arr1[0]<=arr1[1]){
        a=arr1[0]
    }else{
        a=arr1[1]
    }
    //console.log(arr)
    for(let i=2;i>=0;i--){
        if(a===arr[i]){
            return [i,a]
            //console.log(i)
        }
    }
}

function main(num,arr){
    var m = min(arr[0])
    var sum = m[1]
    for(let i=1;i<num;i++){
       m = min2(m[0],arr[i])
       //console.log(m)
       sum = sum+m[1]
    }
    //console.log(sum)
    return sum
}

//main(3,[[1,2,3],[1,2,3],[4,5,6]])

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var lines = []
rl.on('line', function (line) {
    lines.push(line.split(' ').map(Number))
    if(lines.length === 1+lines[0][0]){
        let arr=[]
        for(let i = 1;i<=lines[0][0];i++){
            arr.push(lines[i])
        }
        var result = main(lines[0][0],arr)
        console.log(result)
        rl.close()
    }
})

rl.on('close', function () {
    process.exit(0)
})