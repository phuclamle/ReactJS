// Naming Convention
// camelCase = tongHaiSo
// PascalCase = TongHaiSo
// SnakeCase = tong_hai_so
class Person{
    constructor(name,gender,dob) {
        this.name = name;
        this.gender = gender;
        this.dob = dob;
    }
    setMobile(phoneNumber){
        this.mobile = phoneNumber;
    }
    getMobile(){
        return this.mobile;
    }

    //  setter
    set location(newLocation){
        this.address = newLocation;
    }
    // getter
    get location(){
        return this.address;
    }

    static slogen(){
        return 'Still breath still alive';
    }
}

// Kế thừa
class Student extends Person{
    constructor(name,gender,dob,email) {
        super(name,gender,dob);
        this.email = email;
    }
}
// OPP
// Kế thừa
// Đóng gói
// Đa hình
// Trừu tượng

// getter vs setter

let khoa = new Person("Khoa",true,"10/10/2000");
// Static variable just use through root class
console.log(Person.slogen());

console.log(khoa);

// khoa.setMobile('4934830434');
// khoa.getMobile();
// console.log(khoa.mobile);

khoa.location = "Huế";
console.log(khoa.location);
let chau = new Person("Châu",false,"10/10/2000");

let thuong = new Student("Thương", false, "05/05/2001", "thuong@gmail.com")

console.log(thuong);

let numbers = new Array();
numbers.push()
Math.floor(5,6)