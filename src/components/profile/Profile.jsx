// src/components/Profile/Profile.jsx

import React from "react";
import "./Profile.css"; // نضيف تنسيقات خاصة بالبروفايل هنا

const Profile = () => {
    return (
        <div className="profile">
            <div className="user">
                <img src="avatar.png" alt=""  />
                <h2>john Doe</h2>
                <p>john Doejohn Doejohn Doejoohn Doe</p>
            </div>
            <div className="info">
                <div className="options">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Shared Photos</span>
                        <img src="arrowDown.png" alt=""/>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/18778270/pexels-photo-18778270/free-photo-of-top-view-of-bags-with-grain-on-a-bazaar.jpeg" alt=""/> 
                                <span>photo_2025_2.png</span>
                            </div>
                            <img src="download.png" alt=""/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://images.pexels.com/photos/18778270/pexels-photo-18778270/free-photo-of-top-view-of-bags-with-grain-on-a-bazaar.jpeg" alt="" /> 
                                <span>photo_2025_2.png</span>
                            </div>
                            <img src="download.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="arrowUp.png" alt=""/>
                    </div>
                </div>
                <button>Block User</button>
                <button className="logout">Logout</button>
            </div>
        </div>
    );
    };

export default Profile;
