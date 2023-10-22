const signup = document.createElement('div');
const title = document.createElement('h1')
title.innerHTML = 'Register';
signup.appendChild(title);

const subtitle = document.createElement('h4');
subtitle.innerText = 'Kindly fill in this form to register';
signup.appendChild(subtitle);

let div_1 = document.createElement('div');
let label_1 = document.createElement('label');
label_1.innerText = "Username"
let input_user = document.createElement('input')
input_user.type = "text"
input_user.placeholder = "Enter username"
input_user.className = 'form-group'

div_1.appendChild(label_1);
div_1.appendChild(input_user);
signup.appendChild(div_1)

let div_2 = document.createElement('div');
let label_2 = document.createElement('label');
label_2.innerText = "Email"
let input_email = document.createElement('input')
input_email.type = "email"
input_email.placeholder = "Enter email"
input_email.className = 'form-group'

div_2.appendChild(label_2);
div_2.appendChild(input_email);
signup.appendChild(div_2)

let div_3 = document.createElement('div');
let label_3 = document.createElement('label');
label_3.innerText = "Username"
let input_password = document.createElement('input')
input_password.type = "password"
input_password.placeholder = "Enter password"
input_password.className = 'form-group'

div_3.appendChild(label_3);
div_3.appendChild(input_password);
signup.appendChild(div_3)

let div_4 = document.createElement('div');
let label_4 = document.createElement('label');
label_4.innerText = "Repeat password"
let input_password2 = document.createElement('input')
input_password2.type = "password"
input_password2.placeholder = "Repeat password"
input_password2.className = 'form-group'

div_4.appendChild(label_4);
div_4.appendChild(input_password2);
signup.appendChild(div_4)

let div_5 = document.createElement('div');
let button = document.createElement('button')
button.innerText = "Register"
let p = document.createElement('p');
p.innerText = "Already have an account?";
let a = document.createElement('a');
a.innerText = "Login";
p.appendChild(a);
div_5.appendChild(button)
div_5.appendChild(p);
signup.appendChild(div_5);

document.getElementById('root').appendChild(signup)





