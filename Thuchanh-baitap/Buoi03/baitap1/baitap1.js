async function search_Giphy(){
   let search_key = document.querySelector(".search").value;
    let response = await fetch(` http://api.giphy.com/v1/gifs/search?q=${search_key}&api_key=Rhgx5OML1rHdPT5WOqpas19hjC22l0rX`,{
})
    let giphy = await response.json();


    // Math.random()* (max - min + 1) + min
    console.log(giphy.data);
    let max = giphy.data.length;
    let min = 0;
    let random_item = Math.random()*(max-min+1) + min;
    random_item = Math.floor(random_item);
    console.log(random_item);
    // document.getElementById('userList').innerHTML = htmls.join('')
    console.log(giphy.data[random_item].url);
    document.getElementById("img-giphy").innerHTML += 
    `
    <img src="${giphy.data[random_item].images.original.url}" alt="">
    `
    document.querySelector(".search").value = '';
}

function remove_giphy(){
    document.getElementById("img-giphy").innerHTML = "";
}