import React from "react";
import Avatar from "../Avatar/Avatar";
import Infomation from "../Infomation_item/Infomation_item";


const profile = {
    name: "Khoa Nguyễn",
    age: 20,
    gender: "Male",
    mobile: '0935216417',
    email: "khoa.nguyen@codegym.vn",
    avatar: "https://cdn0.iconfinder.com/data/icons/avatar-78/128/3-512.png"
  }

const Profile = () => {
    return (
        <section>
        <div className="card mb-3" >
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4">
              {/* <img src={profile.avatar} className="img-fluid rounded-start" alt="..." /> */}
               <Avatar avatarURL = {profile.avatar}/>
            </div>
            {/* infomation profile */}
            <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{profile.name}</h5>
              <ul className='list-group'>
                <Infomation>Age: <span className='fw-bolder'>{profile.age}</span></Infomation>
                <Infomation>Gender: <span className='fw-bolder'>{profile.gender}</span></Infomation>
                <Infomation>Email: <span className='fw-bolder'>{profile.email}</span></Infomation>
                <Infomation>Mobile: <span className='fw-bolder'>{profile.mobile}</span></Infomation>
                
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>


    );
}

export default Profile;