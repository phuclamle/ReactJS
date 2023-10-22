const SignupForm = React.createElement("div",{className:"Signup"},
                        React.createElement("h1",null,"Register"),
                        React.createElement('h4',null,"Kindly fill in this form to register."),
                        React.createElement("div",{className:'form-group'},
                            React.createElement("label",null,"Username"),
                            React.createElement("input",{placehoder:"Enter username"},null)),

                            React.createElement("div",{className:'form-group'},
                            React.createElement("label",null,"Email"),
                            React.createElement("input",{placehoder:"Enter email",type: "email"},null)),

                            React.createElement("div",{className:'form-group'},
                            React.createElement("label",null,"Password"),
                            React.createElement("input",{placehoder:"Enter password",type: "password"},null)),

                            React.createElement("div",{className:'form-group'},
                            React.createElement("label",null,"Repeat Password"),
                            React.createElement("input",{placehoder:"Repeat password",type: "password"},null)),

                            React.createElement("button",{type:"button"},"Register")
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(SignupForm)


                        