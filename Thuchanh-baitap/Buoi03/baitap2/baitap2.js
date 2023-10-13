
document.querySelector(".search-btn").onclick = async function(){
    try{
        let search = document.getElementById("weather_search").value;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d582a149e95d630b30de8f0cf72a871e`,{
    });
    let place = await response.json();
    console.log(place);
    let info_array = [];
    let temp_max = place.main.temp_max-273.15;
    temp_max = `Temparature max in ${search} is: ${temp_max}`;
    info_array.push(temp_max);
    let temp_min = place.main.temp_min-273.15;
    temp_min = `Temparature min in ${search} is: ${temp_min}`;
    info_array.push(temp_min);
    let wind_speed = place.wind.speed;
    wind_speed = `site of wind in ${search} is: ${wind_speed}`;
    info_array.push(wind_speed);
    let clouds  = place.clouds.all;
    clouds = `Clouds in ${search} is: ${clouds}`;
    info_array.push(clouds);
    console.log(info_array);

    let info = document.querySelector(".infomation");
    console.log(info);
    let ul_info = document.createElement("ul");
    ul_info.textContent =  `Temparature in ${search}:`;
    info.appendChild(ul_info);
    for(let i =0;i<4;i++){
        let li_info = document.createElement("li");
        li_info.textContent = info_array[i];
        ul_info.appendChild(li_info);
    }
    }catch(error){
        alert("City not found");
    }
}
