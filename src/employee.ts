class Employee{
    id: number;
    name: string;
    phoneNumber: string;
    email: string;

    constructor(id: number,name: string,phoneNumber: string, email: string){
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString(): string {
        let output = `Employee Card: ` + `\n\tID: ${this.id}` + `\n\tName: ${this.name}` + `\n\tPhone Number: ${this.phoneNumber}`
                        + `\n\tEmail: ${this.email}`;
        return output;
    }
}

let someEmployee = new Employee(12,"Justin","8019865","huy@gmail.com");
console.log(someEmployee.toString());


var employeeArray = [
    {emName: "Justin",
     emId: 1,
     emEmail: "jbnhhh@gmail.com",
     emPhone: 8013456543},
    {emName: "Ronaldo",
     emId: 2,
     emEmail: "ronaldo@gmail.com",
     emPhone: 1234567890},
    {emName: "Messi",
     emId: 3,
     emEmail: "messi@gmail.com",
     emPhone: 0987654321},
];