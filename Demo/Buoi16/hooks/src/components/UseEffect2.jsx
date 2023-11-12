import React, {useState,useEffect} from "react";
 

// useEffect(callback,[deps])
// có 3 trường hợp sử dụng
// 1.useEffect(callback)
// -callback sẽ được gọi lại mỗi khi cập nhật state (setState)
// 2.useEffect(callback,[])
// -callback chỉ được gọi 1 lần khi component mounted vào DOM
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
function UseEffect2(){
    // logic
    const [content,setContent] = useState('')
    const [data,setData] = useState([])
    const [isFetching,setIsFetching] = useState(false)
    useEffect (()=>{
       setIsFetching(true)
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        setData(json)
      setIsFetching(false)
      }
      )
      
    },[])
    
    // ui
    return(
        <div className="">
            <input className="form-control" type="text" onInput={(e)=>setContent(e.target.value)} />
            <h1 >Todo List</h1>
            {isFetching ?(<p className="text-danger">Loading...</p>):(<ul>
                {data.map((todo)=>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            )}
            
        </div>
    )
}
export default UseEffect2;