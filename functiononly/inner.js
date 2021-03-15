// function something(greet,name){
//     function sayhi(){            //kono argument carai kaj hosse karon ekhne first function er access ase 
// console.log(greet,name)
//     }
//     sayhi()
// }
// something('good noon','shakil')

function something(greet,name){
    function getfirstname(){
        if(name){
            return name.split(' ')[0]
        }
    }
    var message=greet+' '+getfirstname()
    console.log(message)                  //inner function ta main functon er baire kono access nai
}
something('good noon','kaku takku shakil')