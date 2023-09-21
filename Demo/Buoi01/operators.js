// ++/--
// let number =5;
// // cách 1:
// number = number +5;
// // cách 2:
// number +=1;
// // cách 3:
// number++
// ++number

// number++ >5
// 1.number >5
// ...
// 2.number++ (thao tác cuối cùng)

// number++ >5
// 1.number >5
// ...
// 2.number++ (thao tác đầu tiên)
let number =5;
if(++number >5){
    console.log("Great than 5");
}

console.log("number outside if",number);