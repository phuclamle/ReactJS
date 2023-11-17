import React from "react";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"

const  schema = yup.object({
    fullname: yup.string().required("Bạn cần phải cung cấp họ và tên"),
    age: yup.number()
    .integer()
    .min(18,"Tuổi phải lớn hơn hoặc bằng 18")
    .max(30)
    .required("bạn cần phải cung cấp tuổi")
    .typeError('bạn cần phải cung cấp tuổi'),
    gender: yup.string().required(),
    city: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string()
    .test('password',"Password must between 8 and 10 characters",val => val.length  >=8 && val.length <= 10)
    .required(),
    confirmPassword: yup.string()
    .required()
    .oneOf([yup.ref('password')],"confirm pasword does not match"),
    dob: yup.date().
    required()
    .typeError('dob is a required field')
})

const cityList = [
    {
        id: 1,
        name: "TT Huế",
    },
    {
        id: 2,
        name: "Đà Nẵng",
    },
    {
        id: 3,
        name: "Quảng Trị",
    },
]

function CreateStaff(){
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        resolver: yupResolver(schema)
    })
     
    const handleCreateStaff = (data) =>{
            console.log(data);
    }
    return(
        // ...resigter = {value,onInput,name}
        <form onSubmit={handleSubmit(handleCreateStaff)} className="no-validation">
                <div className="form-group mb-3 has-validation">
                    <label className="form-label"> Full Name </label>
                        <input type="text" className={`form-control ${errors?.fullname?.message ? 'is-invalid':''}`}
                        {...register('fullname')}
                        />
                    <span className="invalid-feedback">{errors?.fullname?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"> Email </label>
                        <input type="email" className={`form-control  ${errors?.email?.message ? 'is-invalid':''}`}
                        {...register('email') }
                        />
                        <span className='invalid-feedback'>{errors?.email?.message}</span>
                </div>
                <div className="form-group mb-3 has-validation">
                    <label className="form-label"> Date of birth </label>
                        <input type="date" className={`form-control ${errors?.dob?.message ? 'is-invalid':''}`}
                        {...register('dob')}
                        />
                    <span className="invalid-feedback">{errors?.dob?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"> Password </label>
                        <input type="password" className={`form-control  ${errors?.password?.message ? 'is-invalid':''}`}
                        {...register('password') }
                        />
                        <span className='invalid-feedback'>{errors?.password?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"> Confirm password </label>
                        <input type="password" className={`form-control  ${errors?.confirmPassword?.message ? 'is-invalid':''}`}
                        {...register('confirmPassword') }
                        />
                        <span className='invalid-feedback'>{errors?.confirmPassword?.message}</span>
                </div>

                <div className="form-group mb-3">
                    <label className="form-label"> Age </label>
                        <input type="number" className={`form-control ${errors?.age?.message ? 'is-invalid':''}`}
                        {...register('age')}
                        />
                        <span className='invalid-feedback'>{errors?.age?.message}</span>
                </div>
                <div className="form-group mb-3">
                    <label className="form-label"> City </label>
                        <select 
                        className={`form-control ${errors?.city?.message ? 'is-invalid':''}`}
                        {...register('city')}>
                            <option value={''}>Please choice a city</option>
                            {
                                cityList.map((city)=>(
                                    <option value={city.name} key={city.id}>{city.name}</option>
                                ))
                            }
                        </select>
                    <span className="invalid-feedback">{errors?.city?.message}</span>

                </div>
                
                <div className="form-group mb-3">
                    <label className="form-label"> Gender </label>
                      <div>
                      <div className="form-check form-check-inline">
                        <input  type="radio" value="male"
                        className={`form-check-input  ${errors?.gender?.message ? 'is-invalid':''}`}
                            {...register('gender')}
                        />
                        <label class="form-check-label">Male</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input type="radio" value="female"
                          className={`form-check-input   ${errors?.gender?.message ? 'is-invalid':''}`}
                          {...register('gender')}
                        />
                        <label className="form-check-label" for="inlineCheckbox2">Female</label>
                        </div> 
                      </div>
                </div>
                

                <div className="form-group mb-3">
                     <button type="submit" className="btn btn-success me-3">Create</button>
                     <button type="button" className="btn btn-dark"
                     onClick={()=>reset()}
                     >Cancel</button>
                </div>
            </form>
    )
}

export default CreateStaff