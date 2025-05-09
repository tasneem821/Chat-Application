import "./Chatlist.css";
import { useState } from "react";

const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);

  const contacts = [
    {
      name: "Sarah Johnson",
      message: "Can we meet tomorrow?",
      avatar: "/profile-1.jpg",
    },
    {
      name: "Emma Wilson",
      message: "Thanks for your help!",
      avatar: "/profile-3.jpg",
    },
    {
      name: "David Miller",
      message: "Let me know when you're free",
      avatar: "/profile-2.jpg",
    },
    {
      name: "Lisa Rodriguez",
      message: "The meeting is at 3pm",
      avatar: "/profile-6.jpg",
    },
    {
      name: "James Brown",
      message: "Did you see the news?",
      avatar: "/profile-8.jpg",
    },
    {
      name: "Olivia Smith",
      message: "Call me when you can",
      avatar: "/profile-7.jpg",
    },
    {
      name: "Robert Taylor",
      message: "Check out this article",
      avatar: "/profile-5.jpg",
    },
    {
      name: "Team Project",
      message: "Alice: I updated the design",
      avatar: "/group.jpg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const filteredSearch = contacts.filter((con) =>
    con.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="Search icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <img
          src={addMode ? "/minus.png" : "/plus.png"}
          alt={addMode ? "Close add mode" : "Add new chat"}
          className="add"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {filteredSearch.map((contact, index) => (
        <div className="item" key={index}>
          <img src={contact.avatar} alt={`${contact.name} avatar`} />
          <div className="texts">
            <span>{contact.name}</span>
            <p>{contact.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chatlist;
