import React, { useState } from "react";
import "./edit.css";

const Edit = ({ userData, setUserData, setOpen }) => {
  const [name, setName] = useState(userData.name);
  const [previewUrl, setPreviewUrl] = useState(userData.img_url);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const handleEdit = () => {
    setUserData({
      name: name,
      img_url: previewUrl,
    });
    setOpen(false);
  };

  return (
    <div className="edit">
      <h2>Edit your Data:</h2>
      <div className="detail">
        <label htmlFor="imgP">
          {" "}
          <img src={previewUrl} alt="Preview" />
        </label>
        <input
          id="imgP"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Edit;
