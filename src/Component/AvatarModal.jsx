import { useState } from "react";
import { useAuthContext } from "../Context/Authcontext";
import { avatar } from "../backend/db/avatar";
import { toast } from "react-hot-toast";
import { Modal } from "@mui/material";
import "./AvatarModal.css";

export const AvaterModal = ({
  userData,
  setUserData,
  setShowAvatarModal,
  showAvatarModal,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const { currrentUser } = useAuthContext();
  return (
    <div className="avatar-container">
      <Modal
        open={showAvatarModal}
        onClose={() => setShowAvatarModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <h1>Avatar</h1>
        <span class="material-symbols-outlined">close</span>
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
              onClick={() => {
                if (selectedAvatar.length === 0) {
                  toast.warning("please select the avatar");
                } else {
                  setUserData({ ...userData, avatarUrl: selectedAvatar });
                }
                setSelectedAvatar(false);
              }}
            ></button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
