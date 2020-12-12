var myPerson = {
    firstName: "Justin",
    lastName: "Nguyen",
    age: "31"

}

console.log(
    `Our object\n============\nPerson:\n\t Name: "${myPerson.firstName} ${myPerson.lastName}" \n\t Age: ${myPerson.age}`
  );


  var playerArray: Array<string> = ['Ronaldo', 'Messi', 'Neymar', 'Mbappe'];
  console.log("\nOur Array\n============")
  playerArray.forEach((player, i) =>{
      console.log(`${i + 1}. ${player}`);
  })

  var personArray =[
      {firstName: "Justin",
      lastName: "Nguyen",
      age: 31},
      {firstName: "Xuan",
      lastName: "Nguyen",
      age: 26},
      {firstName: "Bao",
      lastName: "Nguyen",
      age: 15},

  ];
  console.log("\nOur Array of Objects\n============")
  personArray.forEach((person)=>{
      console.log(`Person:\n\t${person.firstName} ${person.lastName}" \n\t Age: ${person.age}`);
  })

var objectArray = {
    firstName: "Justin",
    lastName: "Nguyen",
    age: "31",
    favoritePlayers: [
        "Ronaldo",
        "Messi",
        "Mbappe",

    ]

}
  console.log("\nAn Objects with An Array\n============");
  console.log(`Person:\n\t Name: "${objectArray.firstName} ${objectArray.lastName}" \n\t Age: ${objectArray.age}`);
  console.log(`\t Favorite Players`);
  objectArray.favoritePlayers.forEach((favor)=>{
      console.log(`\t\t${favor}`);
  })
  



