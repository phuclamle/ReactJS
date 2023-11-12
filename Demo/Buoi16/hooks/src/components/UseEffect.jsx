import React, {useState,useEffect} from "react";
 

// useEffect(callback,[deps])
// có 3 trường hợp sử dụng
// 1.useEffect(callback)
// -callback sẽ được gọi lại mỗi khi cập nhật state (setState)
// 2.useEffect(callback,[])
// 3.useEffect(callback,[deps])
// --
// Chức năng: side effects (những tác động bên cạnh)
// call API
// Update DOM
// set Interval, setTimeout
// listen event DOM

// input: callback, dependency
// output: void

// Nguyên tắc chung:
// 1. callback luôn được gọi khi component được mounted vào DOM
// 2.component UI sẽ được render -> callback gọi
function UseEffect(){
    // logic
    const [content,setContent] = useState('')
    const [number,setNumber] = useState(1)
    const [data,setData] = useState([])
    useEffect (()=>{
        //console.log('component mouted');
        // setNumber(number + 1)
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    document.getElementById('h_1').innerText = content
    })
    
    // ui
    return(
        <div className="bg-success text-white">
            <input type="text" onInput={(e)=>setContent(e.target.value)} />
            <h1 id="h_1"></h1>
            {/* {
                console.log('render UI')
            } */}
        </div>
    )
}
export default UseEffect;