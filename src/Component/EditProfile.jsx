import { useState } from "react";
import { useUser } from "../Context/user-context";

export const EditProfile = ({ userObj, setShowEditModal, showEditModel }) => {
  // const [userValue, setUserValue] = useState({
  //   firstName: userObj?.firstName,
  //   lastName: userObj?.lastName,
  // });
  const [userData, setUserData] = useState(userObj);
  console.log(userData, userObj);
  const { editProfileData } = useUser();
  const handleChange = (e) => {
    // const { name, value } = e.target;
    console.log(e);
    setUserData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    editProfileData(userData);
  };

  return (
    <div>
      <h3>edit profile</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input
            value={userData?.firstName}
            name="firstName"
            onChange={handleChange}
          />
          <label>last Name</label>
          <input
            value={userData?.lastName}
            name="lastName"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <button onClick={() => setShowEditModal(false)}>dicard</button>
        </div>
      </form>
    </div>
  );
};
