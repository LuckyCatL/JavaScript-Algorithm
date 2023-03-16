const readline = require("readline");
function px(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let a = arr[i]
                arr[i] = arr[j]
                arr[j] = a
            }
        }
    }
    return arr
}


function main(arr1, arr2, num) {
    let arr3 = px(arr1)
    let arr4 = px(arr2)
    let arr5 = []
    let n = []
    let z =0
    for (let a = 0; a < arr1.length; a++) {
        for(let b=0;b<arr2.length;b++){
            let m =arr3[a]+arr4[b]
            
            n.push(m)
            
        }
    }
    arr5 = px(n)
    for(let l = 0;l<num;l++){
        z = z+arr5[l]
    }
    //console.log(arr5)
    console.log(z)
}

// var arr1=[1,1,3,2]
// var arr2 = [1,3,4,1]
// var num = 2

// main(arr1,arr2,num)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = []

rl.on('line', function (line) {
    let arr = []
    arr = line.split(' ').map(Number)
    lines.push(arr)
    //console.log(lines[2][0])
    if(lines.length==3){
        let a = lines[0]
        let b =lines[1]
        let c = lines[2]
        // console.log(a)
        // console.log(b)
        // console.log(c[0])
        main(a,b,c)
        rl.close()
    }
    //main()
})

rl.on('close',function(){
    process.exit(0)
})