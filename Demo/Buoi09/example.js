// viết chương trình tạo ra một mảng và đếm xem trong mảng đó có 10 phần tử giá trị sinh ngẫu nhiên [10,50] bao nhiêu số chẵn

function createArray(){
    let min = 10;
    let max = 50;
    let number = new Array(10)
    console.log(number.length);
    for(let i = 0;i<10;i++){
        number[i] = Math.floor(Math.random() * (max - min +1)+min)
    }
   let count = 0;
    for(let i = 0;i<10;i++){
        if(number[i]%2 ==0){
            count ++;
        }
    }
    console.log(count);
}

createArray();

let firstName = "Khoa";
        let lastName = "Nguyen"
        let age = 20

        // let person = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     age: age
        // }

        let person = {
            firstName,
            lastName,
            age
        }

        console.log(person);

        let product =  {
                "id": 3,
                "title": "Mens Cotton Jacket",
                "price": 55.99,
                "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            }
const {id,price,title,description,category,image} = product;
            console.log({id,price,title,description,category,image});
            console.log(id);