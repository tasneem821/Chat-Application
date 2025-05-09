import "./Userinfo.css";
import Edit from "./edit/Edit";
import { useState } from "react";

const Userinfo = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "john doe",
    img_url: "./avatar.png",
  });
  const handleUpdate = (updatedData) => {
    setUserData(updatedData);
  };
  return (
    <div className="userInfo">
      <div className="user">
        <img src={userData.img_url} alt="" />
        <h2>{userData.name}</h2>
      </div>
      <div className="icons">
        <img src="./edit.png" alt="" onClick={() => setOpen((prev) => !prev)} />
      </div>
      {open && (
        <div className="modal-overlay">
          <Edit
            userData={userData}
            setUserData={handleUpdate}
            setOpen={setOpen}
          />
        </div>
      )}
    </div>
  );
};
export default Userinfo;
