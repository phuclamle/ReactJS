// // React.createElement(type,props,Children);
// // +) type:
// //     - Tên thẻ
// //     - Component (tương đương như Thẻ (do mình tạo)) => phục vụ nhu cầu của mình
// // +)props(properties):
// // +)Children:
// /*
//     -Text
//     -React Element
// */

// // virtual DOM vs Real DOM
// // const h1 = React.createElement('h1',{
// //     style: {
// //         color: "white",
// //         backgroundColor: "green"
// //     },onClick:() =>
// //     {alert("Click on h1")}

// // },'We are learning ReactJs');

// // const p = React.createElement('p',null,'React ELement')

// // // React.Fragment -> khi muốn rendering 2 component mà không xuất hiện thêm thẻ div không 
// // // cần thiết 
// // const div = React.createElement(React.Fragment,null,h1,p);

// const div = React.createElement(React.Fragment,null,React.createElement('h1',{
//     style: {
//         color: "red",
//         backgroundColor:"yellow"
//     },
//     onclick:()=>{
//         alert("Click on heading h1")
//     }
// },"We are learing React"),
// React.createElement('p',{
//     style:{
//         fontSize: "20px",
//         fontStyle:'italic'
//     }
// },'React Element'),
// React.createElement('h1',{
//     className : "heading_1"
// },"Use External Style"))
// // virtual DOM
// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(div);
// // root.render(p);s

const loginForm = React.createElement("div",{className: 'login'},
        React.createElement('h3',null,'Login here'),
        React.createElement('div',{className: 'form-group'},
            React.createElement('label',null,"User"),
            React.createElement('input',{type:'text',id:'user_name'})),
            React.createElement('div',{className:"form-group"},
                React.createElement('label',null,'Password'),
                    React.createElement("input",{type:'password',id:"password"})),
            React.createElement('div',{className:"form-group"},
                React.createElement('button',{type:'button',
            onClick:()=>{
                let user = {
                    "user":document.getElementById('user_name').value,
                    "password":document.getElementById('password').value
                }
                console.log(user)
            }},"Login"),
                React.createElement("p",{
                    style:{
                        color: red
                    }
                },
                "Not yet a member?",
                React.createElement('a',{href:"#"},"Register"))))

                const root = ReactDOM.createRoot(document.getElementById('root'))
                root.render(loginForm);