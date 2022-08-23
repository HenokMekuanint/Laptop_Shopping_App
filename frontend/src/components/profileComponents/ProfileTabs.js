import React, { useState } from "react";

const ProfileTabs = () => {
  const [name, setName]=useState("");
  const [email,setEmail]= useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form className="row  form-container">
        <div className="col-md-6">
          <div className="form">
            <label for="account-fn">UserName</label>
            <input className="form-control" type="text" required />
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <label for="account-email">E-mail Address</label>
            <input className="form-control" type="email" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-pass">New Password</label>
            <input className="form-control" type="password" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form">
            <label for="account-confirm-pass">Confirm Password</label>
            <input className="form-control" type="password" />
          </div>
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </>
  );
};

export default ProfileTabs;
