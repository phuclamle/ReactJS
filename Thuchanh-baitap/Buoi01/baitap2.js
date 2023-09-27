let rgx = /^[_a-z0-9]{6,}$/;
function nameLogin(str){
    if(rgx.test(str)){
        console.log("correct name format");
    }else{
        console.log("incorrect name format");
    }
}

let name_1 = "123abc_";
let name_2 = "_abc123";
let name_3 = "12345";
nameLogin(name_1);
nameLogin(name_2);
nameLogin(name_3);