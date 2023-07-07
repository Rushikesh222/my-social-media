import { useState } from "react";
import { useUser } from "../Context/user-context";
import { AvaterModal } from "./AvatarModal";
import { Modal } from "@mui/material";
import "./ProfileEdit.css";
export const EditProfile = ({ userObj, setShowEditModal, showEditModal }) => {
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [userData, setUserData] = useState({
    firstName: userObj?.firstName,
    lastName: userObj?.lastName,
    avatarUrl: userObj?.avatarUrl,
  });

  const { editProfileData } = useUser();
  const handleChange = (e) => {
    setUserData((userData) => ({
      ...userData,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    editProfileData(userData);
    setShowEditModal(false);
  };

  return (
    <div className="editprofile-contianer">
      <h3>edit profile</h3>
      {showAvatarModal && (
        <AvaterModal
          userData={userData}
          setUserData={setUserData}
          setShowAvatarModal={setShowAvatarModal}
          showAvatarModal={showAvatarModal}
        />
      )}
      <Modal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="editprofile-from">
          <form onSubmit={submitHandler}>
            <div className="editprofile-image">
              <img src={userData?.avatarUrl} alt="avater" />
            </div>

            <div className="update-button-container">
              <button
                className="update-button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAvatarModal(true);
                }}
              >
                Update Avatar
              </button>
              <label className="avatar-option">
                <p>Upload From Photo</p>
                <input
                  className="choose-file"
                  type="file"
                  accept="/image"
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      avatarUrl: URL.createObjectURL(e.target.files[0]),
                    });
                  }}
                />
              </label>
            </div>
            <div className="form-detials">
              <label>First Name</label>
              <input
                value={userData?.firstName}
                name="firstName"
                onChange={handleChange}
                className="editprofile-firstname"
              />
              <label>Last Name</label>
              <input
                value={userData?.lastName}
                name="lastName"
                onChange={handleChange}
                className="editprofile-lastname"
              />
            </div>

            <button className="profile-submit" value="Save" type="submit">
              Submit
            </button>
            <button
              className="profile-discard"
              onClick={() => setShowEditModal(false)}
            >
              dicard
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};
