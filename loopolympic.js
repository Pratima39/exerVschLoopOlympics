//Preliminaries
//var fruit = ["banana", "orange", "apple", "kiwi"]

//for (var i=0; i < 10; i++ ){
  //  console.log(i);
//}

//for( var i = 9; i>= 0; i--){
  //  console.log(i);
//}

//for(var i = 0; i < fruit.length; i++){
  //  console.log(fruit.length);
//}

//Bronze Medal
//var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

//const breakfast = [];

//for( let i=0; i <fruit.length; i++ ) {
  //if(i % 2 === 0) {
    //breakfast.push( fruit[i])
 // }
//}
//console.log(breakfast);


//Silver Medal
 //["Harrison Ford", "Vladimir Putin"] // names
 //["Singer", "Entertainer"] // occupations
const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

let names = [];
let occupations = [];

for( let i=0; i < peopleArray.length; i++ ) {
  names.push(peopleArray[i].name );
  occupations.push(peopleArray[i].occupation );
}

console.log( names );

