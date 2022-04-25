class Contact{
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email
    }

    //method
    toString(){
        return "Firstname: "+this.firstName+" Lastname: "+this.lastName+" Address: "+this.address+" City: "+this.city+
        " State: "+this.state+" Zip: "+this.zip+" Phone Number: "+this.phoneNumber+" Email: "+this.email;
    }
}

let person1 = new Contact("Resh","Singh","Abc","Bhopal","MH",462042,9009009010,"ndbbsmnb@gmail.com");
console.log(person1.toString()); 
let person2 = new Contact("Naresh","Singh","Abc","Sagar","MH",462024,9009009043,"nbsccmnsc@gmail.com");
console.log(person2.toString()); 