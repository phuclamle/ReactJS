// Hàm tạo ra mảng numbers
function createArray(size) {
    let numbers = [];
    for (let i = 0; i < size; i++) {
      numbers.push(Math.floor(Math.random() * (60 - 10 + 1)) + 10);
    }
    return numbers;
  }
  
  // Hàm hiển thị mảng numbers
  function displayArray(numbers) {
    console.log(numbers);
  }
  
  // Hàm kiểm tra số chẵn
  function isEven(number) {
    return number % 2 === 0;
  }
  // Hàm đếm số chẵn trong mảng numbers
  function countEvenNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (isEven(numbers[i])) {
        count++;
      }
    }
    return count;
  }
  
  // Hàm kiểm tra số nguyên tố
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  
  
  // Hàm đếm số nguyên tố trong mảng numbers
  function countPrimeNumbers(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (isPrime(numbers[i])) {
        count++;
      }
    }
    return count;
  }
  
  // Hàm tính tổng các phần tử trong mảng numbers
  function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  // Tạo mảng numbers có kích cỡ 10
  let numbers = createArray(10);
  
  // Hiển thị mảng numbers
  displayArray(numbers);
  
  // Đếm số chẵn trong mảng numbers
  let evenCount = countEvenNumbers(numbers);
  console.log("Số chẵn: " + evenCount);
  
  // Đếm số nguyên tố trong mảng numbers
  let primeCount = countPrimeNumbers(numbers);
  console.log("Số nguyên tố: " + primeCount);
  
  // Tính tổng các phần tử trong mảng numbers
  let sum = calculateSum(numbers);
  console.log("Tổng: " + sum);
  