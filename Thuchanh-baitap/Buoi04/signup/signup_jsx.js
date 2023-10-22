
const SignupForm = (
   <div className="Signup_form">
        <h1>Signup here</h1>
        <h4>Kindly fill in this form to register.</h4>
        <div className="form-group">
            <label>Username</label>
            <input type="text"  placeholder="Enter username"/>
        </div>
        <div className="form=group">
            <input type="email" placeholder="Enter email" />
        </div>

        <div className="form=group">
            <input type="password" placeholder="Enter password" />
        </div>

        <div className="form=group">
            <input type="password" placeholder="Repeat Password" />
        </div>

        <button type="button">Register</button>
        <p>Already have an accout? <a href="">Log in</a></p>
   </div>
   
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(SignupForm)