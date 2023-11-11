import React from "react";
import { useState } from "react";

// const [state,setState] = useState(initState)
// Nhiệm vụ của useState: quản lý trạng thái component
// input: initState là tất cả các kiểu dữ liệu có trong js
//      -number, string, boolean, null. undefined
//      - array, object, callback
// output: trả về 1 mảng, mảng này có 2 giá trị.
//  giá trị thứ nhất cùng kiểu dữ liệu mà initState trả về
//  giá trị thứ hai là một hàm, hàm này có nhiệm vụ cập nhật value mới cho giá trị thứ nhất

// lần đầu tiên count có giá tri là 10
// const [count, setCount] = useState(10)
// count = 10;
// setCount(20)

// const result = useState(10)
// let count = result(0)
// let setCount = result[1]
// count = 10;
// setCount(20)

// nguyên lý: mỗi khi thực thi hàm setState() thì component sẽ được re-render
 
function UseState(){
    // Logic
    // Destructering
    // const [number,setNumber] = useState(0)
    const result = useState(0)
   const handleIncreasement = ()=>{
    result[1](result[0] + 1)
   }
   const handleDecreasement = ()=>{
    result[1](result[0] - 1)
   }
    // UI
    return(
        
         <div>
             <h1> {result[0]}</h1>
             <button onClick={handleIncreasement}>Increasement</button>
             <button onClick={handleDecreasement}>Decreasement</button>

        </div>
    )
}

// const UseState = () =>{
//     return(
//         <div>
//             <h1>Learning useState</h1>
//         </div>
//     )
// }

export default UseState;