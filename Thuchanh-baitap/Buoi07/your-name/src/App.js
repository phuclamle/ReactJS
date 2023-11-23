import logo from './logo.svg';
import { Component } from 'react';
import React from 'react';
import './App.css';
import Introduction from './components/Bai1/Introduction';
import Calculator from './components/Bai2/Calculator';
 
import Home from './components/Bai3/Home';
import JobList from './components/Bai4/JobList';

 class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        // showIntro: false
        studentList: [],
        form: {name:'',
              phone: '',
              email: '',
              isValid: true,
              indexSelected: -1
      }
      }
      
    }
    // Bài 1:
    // handleToggle = () =>{
    //   this.setState({
    //     ...this.state,
    //     showIntro: !this.state.showIntro
    //   })
    // }

    // Bài 3:

    // handleChange = (event) => {
    //   this.setState((state) => {
    //     const { form } = state
    //     form[event.target.name] = event.target.value
    //     return { form }
    //   }, () => this.checkValidForm())
    // }
    
    // handleChangeCheckbox = () => {
    //   this.setState((state) => {
    //     const { form } = state
    //     form.isRemember = !form.isRemember
    //     return { form }
    //   }, () => this.checkValidForm())
    // }
   
    // checkValidForm = () => {
    //   const { email, password } = this.state.form
    //   const value = email && password
    //   this.setState({ isValid: value })
    // }
   
    // handleSubmit = () => {
    //   if (this.state.isValid){
    //     this.setState({ isLoggedIn: true })
    //   }
    // }
   
    // handleLogOut = () => {
    //   this.setState({ isLoggedIn: false })
    // }
    // render(){
      // return(
      // //     <>
      // //     {/* Bài 1: */}
      // //     {/* <div className='bg-success text-white height p-4 fs-2 fw-bolder'>Conditional Rendering</div>
      // //     <button className='mt-2'  onClick={this.handleToggle}>{this.state.showIntro ? (<p>Đóng giới thiệu</p>) :(<p>Xem giới thiệu</p>) }</button>
      // //     {
      // //       this.state.showIntro && 
      // //       <Introduction/>
      // //     } */}

      // //     {/* Bài 2: */}
      // //     {/* <Calculator/> */}

      // //     {/* Bài 3: */}
           
           
      // //     </>

      //  )

//       const { isLoggedIn, form } = this.state
//     if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
//     return (
//       <div className="container d-flex align-items-center text-center">
//         <div className="form-signin">
//           <form>
//             <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
//             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
//             <div className="form-floating">
//               <input className="form-control email" type="email" name="email" placeholder="name@example.com" value={form.email} onChange={this.handleChange} />
//               <label>Email address</label>
//             </div>
//             <div className="form-floating">
//               <input className="form-control password" type="password" name="password" placeholder="Password" value={form.password} onChange={this.handleChange} />
//               <label>Password</label>
//             </div>
//             <div className="checkbox mb-3">
//               <label>
//                 <input type="checkbox" value={form.isRemember} onChange={this.handleChangeCheckbox} /> Remember me
//               </label>
//             </div>
//             <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.handleSubmit} >Sign in</button>
//             <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
//           </form>
//         </div>
//       </div>
//     )

      
//   }

// Bài 4:
      // render(){
      //   return(
      //     <>
      // <JobList/>
      //     </>
      //   )
      // }

// Bài 5:
handleChange = (event) => {
  this.setState((state) => {
    const form = state.form
    form[event.target.name] = event.target.value
    return { form }
  }, () => this.checkInvalidForm())
}

handleSelect = (studentSelected, index) => {
  this.setState({
    form: JSON.parse(JSON.stringify(studentSelected)),
    indexSelected: index
  })
}
checkInvalidForm = () => {
  const { name, phone, email } = this.state.form
  const value = name && phone && email
  this.setState({
    isValid: value
  })
}

handleSubmit =(student)=> {
  const {isValid,indexSelected} = this.state
  let studentList = this.state.studentList
  if (isValid === true) {
    if (indexSelected > -1) {
      // Người dùng đang thao tác edit
      studentList.splice(indexSelected, 1, student); // Cập nhật lại giá trị student tại vị trí indexSelected
    } else {
      // Người dùng đang thao tác add
      studentList.push(student); // Thêm student vào studentList
    }
    
    this.setState({
      studentList: studentList,
      form: "", // Giá trị mặc định cho form
      isValid: false, // Giá trị mặc định cho isValid
      indexSelected: -1 // Giá trị mặc định cho indexSelected
    });
  }
}

handleDelete = (index) => {
}

      render(){
        
          const { studentList, form } = this.state;
          return (
            <div>
              <div>
                <h1>Student List</h1>
                <div>
                  <label>Name: </label>
                  <input
                    name="name"
                    value={form.name} // Giá trị của trường name
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label>Phone: </label>
                  <input
                    type="number"
                    name="phone"
                    value={form.phone} // Giá trị của trường phone
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label>Email: </label>
                  <input
                    name="email"
                    value={form.email} // Giá trị của trường email
                    onChange={this.handleChange}
                  />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentList.map((student, index) => (
                      <tr key={index}>
                        <td>{student.name}</td>
                        <td>{student.phone}</td>
                        <td>{student.email}</td>
                        <td>
                          <button onClick={() => this.handleSelect(student, index)}>
                            Edit
                          </button>
                          <button onClick={() => this.handleDelete(index)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        
      }
  
    }





export default App;
