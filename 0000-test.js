// function mian(){
//     for(let i=0;i<10;i++){
//         if(i===0){
//             console.log(i)
//         }
//     }
// }
// mian()

var a = '12G2M3G4T'
var b = a.replace(/[GMT]/g,function(a){
    return a+' '
})
var c =b.trim().split(' ')
var d = c[0].slice(0,-1)
console.log(Number(d)+1)