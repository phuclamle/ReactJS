let rgx = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
function ValidateEmail(str){
    if(rgx.test(str)){
        console.log("correct email format");
    }else{
        console.log("incorrect email format");
    }
}

let email_1 = "abcdef@gmail.com";
let email_2 = "navdkjd@gmail.com";
let email_3 = "ldkfdf";
ValidateEmail(email_1);
ValidateEmail(email_2)
ValidateEmail(email_3)