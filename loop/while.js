var isrunning=true
while(isrunning){
    var rand=Math.floor(Math.random()*10+1)
    if(rand==9){
        console.log('winner winner')
        isrunning=false
    }
    else{
        console.log('you have got '+rand)
    }
}
//when randomly get 9 then execution will end