const readline = require("readline");

function hz(p, q) {
    let max = (p > q) ? p : q
    for (let i = 2; i <= max; i++) {
        if (p % i == 0 && q % i == 0) {
            return 0
        }
    }
    return 1
}

function hz2(a, b, c) {
    if (hz(a, b) && hz(b, c) && hz(a, c)) {
        return 1
    } else {
        return 0
    }
}

function main(m, n) {
    let flag = 0
    for (let x = m; x <= n; x++) {
        for (let y = x + 1; y <= n; y++) {
            for (let z = y + 1; z <= n; z++) {
                if (hz2(x, y, z) && Math.pow(x, 2) + Math.pow(y, 2) == Math.pow(z, 2)) {
                    console.log(`${x} ${y} ${z}`)
                    flag++
                }
            }
        }
    }
    if (flag == 0) {
        console.log('NA')
    }
}

function main(m, n) {
    let flag = 0
    for (let x = m; x <= n; x++) {
        for (let y = x + 1; y <= n; y++) {
            for (let z = y + 1; z <= n; z++) {
                if (hz(x, y, z) && Math.pow(x, 2) + Math.pow(y, 2) == Math.pow(z, 2)) {
                    console.log(`${x} ${y} ${z}`)
                    flag++
                }
            }
        }
    }
    if (flag == 0) {
        console.log('NA')
    }
}



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const lines = []

rl.on('line', function (line) {
    
        //let [m,n] = line.split(' ').map(Number);
        lines.push(line)
        //console.log(lines)
        if(lines.length==2){
            let m = lines[0]
            let n = lines[1]
            main(m,n)
            rl.close()
        }
        

});

rl.on('close',function(){
    process.exit(0)
})


// let lines = line.split(' ').map(Number);