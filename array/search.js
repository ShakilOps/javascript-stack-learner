var arr=[23,56,90,12,45,78,34,87,54,12]

var find=20
var isfound=false
for(i=0;i<arr.length;i++){
    if(arr[i]==find){
        console.log('Data found at index '+i)
        isfound=true
        break;
    }
    
}
if(!isfound){     //can use here (isfound==false)
    console.log('Data not found')
}



