import { useState } from "react";
import { useAuthContext } from "../Context/Authcontext";
import { avatar } from "../backend/db/avatar";
import { Modal } from "@mui/material";
import "./AvatarModal.css";

export const AvaterModal = ({
  userData,
  setUserData,
  setShowAvatarModal,
  showAvatarModal,
}) => {
  console.log(showAvatarModal, "userdata");
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const { currrentUser } = useAuthContext();
  return (
    <div className="avatar-container">
      <Modal
        className="avtar-display-container"
        open={showAvatarModal}
        onClose={() => setShowAvatarModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="avatar-content">
          <span
            onClick={() => setShowAvatarModal(false)}
            class="material-symbols-outlined close-avatar"
          >
            close
          </span>
          <div className="avatar-list">
            {avatar
              ?.filter((image) => image !== currrentUser?.avatarUrl)
              .map((avatar) => (
                <div className="avatar-image">
                  <img
                    style={{
                      border: selectedAvatar === avatar ? "4px solid blue" : "",
                    }}
                    alt="avatar"
                    src={avatar}
                    onClick={() => setSelectedAvatar(avatar)}
                  />
                </div>
              ))}
            <div className="avatar-button">
              <button
                className="change-button"
                onClick={() => {
                  if (selectedAvatar.length === 0) {
                  } else {
                    setUserData({ ...userData, avatarUrl: selectedAvatar });
                  }
                  setSelectedAvatar(false);
                }}
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
