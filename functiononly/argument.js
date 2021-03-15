// function add(a,b){
//     var result=a+b
//     console.log(result)
// }
// add(56,78)
// add(55,55)

// //sum of arrray
// var arr1=[4,7,8]
// var arr2=[9,5,2]
// var arr3=[6,6,6]
// function sumofarray(arr){
//     var sum=0
//     for(i=0;i<arr.length;i++){
//         sum+=arr[i]

//     }
//     console.log(sum)
// }
// sumofarray(arr1)
// sumofarray(arr2)
// sumofarray(arr3)

// function test(a,b,c){
//     console.log(JSON.stringify(arguments)) //arguments shows as like array with index number coz strungify
// }
// test(10,20,30)

// function test(a,b,c){
//     console.log(arguments) //arguments shows as like array with index number
// }
// test(10,20,30)

// function test(){
//     for(i=0;i<arguments.length;i++){
//         console.log(arguments[i])
//     }
// }
// test(45,78,90)

function addall(){
    sum=0
    for(i=0;i<arguments.length;i++){
        sum +=arguments[i]

    }
    console.log(sum)
}
addall(1,2,3,4,5,6,7,8,9)
addall(100,200,300)