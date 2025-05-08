import  { useState } from "react";
import "./Profile.css";

const SharedPhotos = ({ photos }) => (
    <div className="photos">
        {photos.map((photo, i) => (
        <div className="photoItem" key={i}>
            <div className="photoDetail">
            <img src={photo.src} alt={photo.name} />
            <span>{photo.name}</span>
            </div>
            <img src="download.png" alt="Download" />
        </div>
        ))}
    </div>
    );

    const ProfileSection = ({ title, children, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen);

    return (
        <div className="options">
        <div className="title" onClick={() => setOpen(!open)}>
            <span>{title}</span>
            <img src={open ? "arrowUp.png" : "arrowDown.png"} alt="Toggle" />
        </div>
        {open && children}
        </div>
    );
    };

    const Profile = ({ user, photos }) => {
    return (
        <div className="profile">
        <div className="user">
            <img src={user.avatar} alt="User avatar" />
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
        </div>

        <div className="info">
            <ProfileSection title="Chat Settings" />
            <ProfileSection title="Privacy & Help" />
            <ProfileSection title="Shared Photos" defaultOpen>
            <SharedPhotos photos={photos} />
            </ProfileSection>
            <ProfileSection title="Shared Files" />

            <button>Block User</button>
            <button className="logout">Logout</button>
        </div>
        </div>
    );
    };

export default Profile;
