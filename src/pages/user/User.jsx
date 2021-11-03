import { MailOutline, PermIdentity } from "@material-ui/icons";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { updateUser } from "../../context/userContext/apiCalls";
import "./user.css";
import { useLocation } from "react-router-dom";

export default function User() {
  const location = useLocation();
  const [user, setUser] = useState({});
  const { dispatch } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user, dispatch, location.user._id);
    window.location.pathname = "/users"
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [e.target.name]: value,
      };
    });
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src={
                user.profilePic ||
                "https://ih1.redbubble.net/image.618370650.1083/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
              }
              alt=""
              className="userShowImg"
            />
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">
                {location.user.username}
              </span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{location.user.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={location.user.username}
                  className="userUpdateInput"
                  name="username"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>

              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder={location.user.email}
                  className="userUpdateInput"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
              <div className="userUpdateItem">
                <label>Profile Pic Link</label>
                <input
                  type="text"
                  name="profilePic"
                  placeholder={location.user.profilePic}
                  className="userUpdateInput"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src={location.user.profilePic}
                  alt=""
                />
              </div>
              <button
                className="userUpdateButton"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
