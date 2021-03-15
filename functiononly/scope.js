var a='mno'

function x(){
    function y(){
        var a=90     //inner function er variable outer function ee accesable naa
        console.log(a)
    }
    console.log(a)
    y()
}
x()

//globally kono cvariable thke js ee function er vitor scope er variable ta beshi pradhanno pbe

function test(n){
    function a(){
        return n%3==0
    }
    function b(){
        return n%5==0
    }
    if(a() && b()){
        console.log(n+'  is divisible')
    }
    else{
        console.log('not valid')
    }
}
test(15)
