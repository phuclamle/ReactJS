
// error object is not a key
// let khoa = {
//     "name" : "Khoa",
//     "age" : 20,
//     "gender" : "male",
//     1 : "One",
//     true: "Đúng",
//     // {level: "A"} : "Language"
// }

// console.log(khoa);
// console.log(khoa['name']);

// Object map

let khoa = new Map([
    ["name", "khoa"],
    ["age", 20],
    ["gender", "male"]
])

// set object's role  is key
khoa.set({ level: "A"}, "Language")

// show key 
// console.log(khoa.keys());

// show value
console.log(khoa.values());

console.log(khoa.entries());

// console.log(khoa['name']);