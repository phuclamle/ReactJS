// Bài tập 1:
// Viết chương trình thực hiện các nhiệm vụ sau:
// 1. Viết hàm tạo ra mảng numbers có kích cỡ size, và các giá trị của mảng được sinh ngẫu nhiên trong [10, 60]
// 2. Viết hàm hiển thị mảng numbers ra màng hình
// 3. Viết hàm đếm xem trong mảng numbers có bao nhiêu số chẵn
// 4. Viết hàm đếm xem trong mảng numbers có bao nhiêu số nguyên tố
// 5. Viết hàm tính tổng các phần tử có trong mảng numbers

 function generateArray(size){
  let numbers = new Array(size);
  for(let i =0; i<size;i++){
    min =10;
    max =60;
    numbers[i] = Math.floor(Math.random() * (max-min+1) +min);
  }
  return numbers;
 }

 function printArray(array){
    //for(let item of array){
    //   console.log(item);
    // }
   console.log(array);
 }

//  clean code
//  refactor code

function isEvenNumber(number){
  // if(number%2==0){
  //   return true;
  // }
  //   return false;
    return number %2 ==0;
}

function isPrimer(number){
  for(let i =0;i<number;i++){
    if(number%i==0){
      return false;
    }
    return true;
  }
}

function countEvenNumber(numbers){
  let count =0;
  numbers.forEach((element) => {
      if(isEvenNumber(element)){
        count++;
      }
      return `Array include ${count} evenNum`
  });
}

function countPrimerNumber(numbers){
  let count =0;
  numbers.forEach((element) => {
    if(isPrimer(element)){
      count++;
    }
    return `Array include ${count} primerNum`
});
}

function sumArray(numbers){
  let total =0;
  for(let i=0;i<numbers.length;i++){
    total += numbers[i];
  }
  return total;
}

// Math.floor(Math.random()* (max - min + 1) + min)
// console.log(Math.random()); //(0, 1) -> 0.01 -> 0.99 -> 51 -> 0.51 -> 50.49 -> 10.51 -> 60.49 -> [10, 60]
// console.log(0.99 * 50);
// console.log(0.01 * 50);

let myArray = generateArray(15)
printArray(myArray)
countEvenNumber(myArray)
countPrimerNumber(myArray)
sumArray(myArray)





 