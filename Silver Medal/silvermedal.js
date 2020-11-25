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
  
