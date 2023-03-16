const readline = require("readline");

function main(arr1, arr2) {
    var newArr1 = [...new Set(arr1.split(""))]
    var newArr2 = [...new Set(arr2.split(""))]
    var newArr3 = []
    //console.log(newArr1)
    for (let i = 0; i < newArr2.length; i++) {
        if (newArr1.indexOf(newArr2[i]) >= 0) {
            newArr3.push(newArr2[i])
            //console.log(newArr3)

        }
    }


    var arr = newArr3.sort(function (a, b) { return a.charCodeAt() - b.charCodeAt() })
    //console.log(arr)
    return (arr.join(""))
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const lines = []
rl.on('line', function (line) {
    lines.push(line)
    //console.log(lines)
    if (lines.length === 2) {
        console.log(main(lines[0], lines[1]))
        rl.close()
    }
})

rl.on('close', function () {
    process.exit(0)
})


// var a = ["bach","bbaaccddfg"]
// main(a[0],a[1])