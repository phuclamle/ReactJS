import React,{useState} from "react";

function CreateStaff(){
    const [form,setForm] = useState({
        values: {
            'fullname': '',
            'email': ''
        },
        errors: {
            'fullname': 'fullname is a required field',
            'email': 'email is a required field'
        },
        touch: {
            'fullname' : false,
            'email': false
        }
    })


    const handleCreateStaff = (e)=>{
        e.preventDefault()
        // call Login
        if(form.values.fullname && form.values.email){
        console.log(form.values);
        }else{
            setForm({
                values: {
                    'fullname': '',
                    'email': ''
                },
                errors: {
                    'fullname': 'fullname is a required field',
                    'email': 'email is a required field'
                },
                touch: {
                    'fullname' : true,
                    'email': true
                }
            })
        }

    }

    const handleInputValue = (e) =>{
        if(e.target.value){
            setForm({
                ...form,
                values: {
                    ...form.values,
                    [e.target.name] : e.target.value
                },
            
            errors : {
                ...form.errors,
                [e.target.name] :''
            },
            touch: {
                ...form.touch,
                [e.target.name] : document.activeElement == e.target
            }
        })
        }
        else{
            setForm({
                ...form,
                values: {
                    ...form.values,
                    [e.target.name] : e.target.value
                },
            
            errors : {
                ...form.errors,
                [e.target.name] : `${e.target.name} is a required field`
            }, touch: {
                ...form.touch,
                [e.target.name] : document.activeElement == e.target
            }})
        }
       
    }


    const handleCancel = ()=>{
        setForm({
            ...form,
            values: {
                ...form.values,
                fullname: '',
                email: ''
            },
        errors: {
            'fullname': 'fullname is a required field',
            'email': 'email is a required field'
        },
        touch: {
            'fullname' : false,
            'email': false
        }

        })
    }
    console.log(form);
    return(
        <>
        <h1>Create Staff</h1>
        <form  onSubmit={handleCreateStaff}>
            <div className="form-group mb-2">
            <input value={form.values.fullname} type="text" className="form-control" name="fullname"
            onInput={handleInputValue}/>
             {/* {form.errors ? form.errors.fullname : null} */}
            <span className="text-danger">{form.touch.fullname && form.errors?.fullname}</span>
            </div>
            <div className="form-group mb-2">
            <input value={form.values.email} type="email" className="form-control" name="email"
             onInput={handleInputValue}/>
            <span className="text-danger">{form.touch.email && form.errors?.email}</span>
            </div>
            <div className="form-group mb-2">
           <label htmlFor=""></label>
           <button type="submit" className="btn btn-sm btn-warning me-2">Create</button>
           <button type="button" className="btn btn-sm btn-dark"
           onClick={handleCancel}
           >Cancel</button>

            </div>
        </form>

        </>
    )
    }


 export default CreateStaff