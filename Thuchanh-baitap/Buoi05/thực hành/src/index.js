import React from 'react';
import ReactDOM from 'react-dom/client';
 
// const name = "Lê Phúc Lâm";
const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(
//   React.createElement('h1',{style: {textAlign: "center",color:"red"}},name)
// );

// root.render(
//   <h1 style={{textAlign:"center",color:"red"}}>{name}</h1>
// )

// const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];


// ReactDOM.render(
//   <div>
//     <h1>List of fruits</h1>
//     <ul>
//       {fruits.map((fruit)=>(
//          <li>{fruit}</li>)
//       )
//        } 
//     </ul>
//   </div>
//   ,  document.getElementById("root")
// );

const tick = () => {
  root.render(
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
}

setInterval(tick,1000)

