// Danh sách các con vật đã có trong sở thú
let animals = new Set(['Gà',"Vịt","Bò","Lợn"]);

// Thêm một loài mới vào danh sách
animals.add("Khỉ");
console.log(animals.values());

// Kiểm tra xem khỉ đã có trong danh sách hay chưa
for(animal of animals ){
    if(animal == "Khỉ"){
        console.log("Có khỉ");
        break;
    }
}

// Xóa loài vật khỏi danh sách quản lý
animals.delete("Bò");
console.log(animals.values());

// In ra loài vật hiện có trong sở thú
for(animal of animals ){
   console.log(animal);
}



// Set vs Array
// unique (duy nhất)
// ko index

// let animals = new Set(["Gà","Vịt"])
// // ~ arr.push
// animals.add("Bò")
// animals.add("Lợn")
// console.log(animals.values());
// for(let animal of animals.values()){
//     console.log(animal);
// }

// animals.delete("Bò");
// console.log(animals.values());
// animals.forEach(function(animal){
//     console.log(animal);
// })

// animals.clear()
// console.log(animals.values());
