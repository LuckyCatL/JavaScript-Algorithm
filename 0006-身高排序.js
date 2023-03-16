const readline = require("readline");


function main(arr1, arr2) {

    let arr3 = []
    for (let i = 0; i < arr1[1]; i++) {
        let m = Math.abs(arr2[i] - arr1[0])
        arr3.push(m)
    }
    for (let i = 0; i < arr1[1]; i++) {
        for (let j = i + 1; j < arr1[1]; j++) {
            if (arr3[i] > arr3[j]) {
                let a = arr2[i]
                arr2[i] = arr2[j]
                arr2[j] = a

                let b = arr3[i]
                arr3[i] = arr3[j]
                arr3[j] = b

            } else if (arr3[i] = arr3[j]) {
                if (arr2[i] > arr2[j]) {
                    let c = arr2[i]
                    arr2[i] = arr2[j]
                    arr2[j] = c

                    let d = arr3[i]
                    arr3[i] = arr3[j]
                    arr3[j] = d
                }

            }
        }
    }
    return arr2
}

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const lines = []
rl.on('line',function(line){
    let le = line.split(' ').map(Number)
    
    lines.push(le)
    //console.log(lines)
    if(lines.length===2){
        let num = []
        for(let i=0;i<lines[0][1];i++){
            
            num.push(lines[1][i])
        }
        var l=''
        var res = main(lines[0],num)
        for(let j=0;j<res.length;j++){
            l = l+`${res[j]}`+' '
        }
        console.log(l.trim())
        rl.close()
    }
})

rl.on('close',function(){
    process.exit(0)
})
// var arr1 = [100, 10]
// var arr2 = [95, 96, 97, 98, 99, 101, 102, 103, 104, 105]
// main(arr1, arr2)