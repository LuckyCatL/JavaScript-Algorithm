//0010-数据分类
function SJFL() {
    var a = []
    var b = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3]

    for (let k = 0; k <= 3; k++) {
        a.push(0)

    }

    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j <= 3; j++) {
            if (b[i] === j) {
                a[j]++
            }
        }
    }

    console.log(a)
}

//0010-最小叶子节点
function ZXYZJD(){
    var a = [0,1,2,3,4,4]
    a.unshift(0)
    console.log(a)
}

// function xxx(){
//     var a = 3
//     console.log(a%2)
// }

