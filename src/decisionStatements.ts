//this is if/else statement
var x: number = 7;
if(x == 7){
    console.log("Check 1: this is Ronaldo");
}
else if(x == 4){
    console.log("Check 2: this is unknown soccer player");
}
else{
    console.log("this should not print")
}



var bestPlayer = "Ronaldo";
switch(bestPlayer){
    case "Ronaldo":
        console.log("The best soccer player in the world");
        break;
    case "Messi":
        console.log("Ronaldo is better than Messi");
        break;
    default:
        console.log("good player");
}

