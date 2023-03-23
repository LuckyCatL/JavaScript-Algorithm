const readline = require("readline");

function main(arr){
    //console.log(arr)
    for(let i=1;i<arr.length/2;i++){
        let step = 1
        let sum = i
        let arr1 =[]
        arr1.push(i)
        //console.log(arr[i])
        for(let j=i;j<arr.length-i;){
            j=arr[j]+i
            arr1.push(arr[j])
            sum = sum + arr[j]
            step++
            // /console.log(j)
            if(sum === arr.length-1){
                //console.log(step)
                console.log(arr1)
            }
        }
    }
}

//main([7,5,9,4,2,6,8,3,5,4,3,9])
main([1,2,3,4,5,2,1,1])

（暂时没有完成）

