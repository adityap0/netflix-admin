import "./widgetSm.css";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { getUsers } from "../../context/userContext/apiCalls";

export default function WidgetSm() {
  const { users, dispatch } = useContext(UserContext);
  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">All Users</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
