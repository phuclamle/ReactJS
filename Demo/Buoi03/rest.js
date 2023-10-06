// rest = phần còn lại
// parameter vs agrument

function sum(){
    let total = 0;
    for(let i =0; i<arguments.length;i++){
        total += arguments[i];
    }

    return `Total is: ${total}`
}

function sum(prefix,...rest){
    let total =0;
    for(let i =0; i<rest.length;i++){
        total += rest[i]
    }
    
    return `${prefix}:${total}`
}
console.log(sum("Tổng là",5,6,7,8,7,6,5,43,4,5,6,5,4,3,3,4,5,6,5));
console.log(sum("Total is", 5, 7, 4, 3, 6, 7, 4, 3, 2, 4, 6, 8, 6, 5))
