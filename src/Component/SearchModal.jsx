import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/user-context";
import "./Searchmodal.css";
export const SearchModal = ({ searchInput, setShowSearchModal }) => {
  const { userState } = useUser();
  const navigate = useNavigate();
  const filteredUser =
    searchInput?.trim().length > 0 &&
    userState?.filter(
      (user) =>
        user?.firstName
          ?.toLowerCase()
          .includes(searchInput.trim().toLowerCase()) ||
        user?.lastName?.toLowerCase().includes(searchInput.trim().toLowerCase())
    );
  return (
    <div className="search-contianer">
      <i
        className="fa-solid fa-xmark"
        onClick={() => setShowSearchModal(false)}
      ></i>
      <div>
        {searchInput?.length > 0 && (
          <div>{filteredUser?.length === 0 && <h1>No Users Found</h1>}</div>
        )}
      </div>
      <div>
        {filteredUser?.length > 0 && (
          <div className="user-profile">
            {filteredUser.map((user) => (
              <div
                onClick={() => {
                  navigate(`/profile/${user?.username}`);
                }}
                className="proflie"
              >
                <div className="leftside-profile">
                  <div
                    onClick={() => {
                      navigate(`/profile/${user?.username}`);
                    }}
                    className="Rightside_avatar"
                  >
                    <img src={user?.avatarUrl} alt="avatar" />
                  </div>
                  <div
                    onClick={() => {
                      navigate(`/profile/${user?.username}`);
                    }}
                    className="Rightside_headerText"
                  >
                    <h3>{`${user?.firstName}`}</h3>
                    <span className="display_headerSpecial">
                      <span class="material-symbols-outlined Rightside_badge">
                        verified
                      </span>
                      @{user?.username}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
