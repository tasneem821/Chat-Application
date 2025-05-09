import List from "./components/List/List";
import Chat from "./components/chats/Chat";
import Profile from "./components/profile/Profile";

const ChatPage = () => {
  return (
    <div className="container" style={{ display: "flex" }}>
      <List />
      <Chat />
      <Profile
        user={{
          name: "Jane Doe",
          avatar: "avatar.png",
          bio: "Frontend Developer & Tech Enthusiast",
        }}
        photos={[
          {
            src: "https://images.pexels.com/photos/18778270/pexels-photo-18778270/free-photo-of-top-view-of-bags-with-grain-on-a-bazaar.jpeg",
            name: "photo_2025_2.png",
          },
          {
            src: "https://images.pexels.com/photos/18778270/pexels-photo-18778270/free-photo-of-top-view-of-bags-with-grain-on-a-bazaar.jpeg",
            name: "photo_2025_3.png",
          },
        ]}
      />
    </div>
  );
};

export default ChatPage;
