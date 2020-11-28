function getSpecial (weekday: string):string {
    // This switch will take the "weekday" parameter, and find the matching "case"
    switch (weekday) {
        // The code will run down this list, find the matching case, then run
        // from there until it hits the end of the switch, or it hits a "break"
        case "Monday":
            return "Family Night, kids eat free!"
            break
        case "Tuesday": 
            return "Taco Tuesday, 1/2 Price Tacos!"
            break
        case "Wednesday": 
            return "Wakcy Wednesdays, Half price appetizers"
            break
        case "Thursday":
            return "Save for the weekend, 10$ for all you can eat pasta"
        // if "weekday" is *anything* other than the weekdays listed, it will
        // do the default case.
        default:
            return "Celebrate the weekend with Jan's finest wines!"
    }
}
console.log(getSpecial("Tuesday"))
console.log(getSpecial("Saturday"))