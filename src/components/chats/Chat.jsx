import "./Chat.css";
import EmojiPicker from "emoji-picker-react";
import { useState, useEffect, useRef } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! How are you doing today?",
      sender: "other",
      time: new Date(Date.now() - 3600000),
      avatar: "./avatar.png",
    },
    {
      id: 2,
      text: "I'm good, thanks! Just working on some React projects.",
      sender: "me",
      time: new Date(Date.now() - 3000000),
    },
    {
      id: 3,
      text: "That sounds interesting! What kind of projects?",
      sender: "other",
      time: new Date(Date.now() - 2400000),
      avatar: "./avatar.png",
    },
    {
      id: 4,
      text: "Mostly chat applications and UI components.",
      sender: "me",
      time: new Date(Date.now() - 1800000),
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  const handleSend = () => {
    if (text.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      text: text.trim(),
      sender: "me",
      time: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setText("");

    // Simulated reply after 1–3 seconds (70% chance)
    if (Math.random() > 0.3) {
      setTimeout(() => {
        const replies = [
          "That's interesting!",
          "I see what you mean.",
          "Could you explain that more?",
          "Thanks for letting me know!",
          "I was thinking the same thing.",
          "What made you say that?",
          "That's a good point.",
          "Let me think about that...",
        ];
        const replyMessage = {
          id: Date.now() + 1,
          text: replies[Math.floor(Math.random() * replies.length)],
          sender: "other",
          time: new Date(),
          avatar: "./avatar.png",
        };
        setMessages((prev) => [...prev, replyMessage]);
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return "Today";
    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";
    return date.toLocaleDateString();
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="User avatar" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Online</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="Call" />
          <img src="./video.png" alt="Video call" />
          <img src="./info.png" alt="Info" />
        </div>
      </div>

      <div className="center">
        {messages.map((message, index) => {
          const showDate =
            index === 0 ||
            formatDate(message.time) !== formatDate(messages[index - 1].time);

          return (
            <div key={message.id}>
              {showDate && (
                <div className="date-separator">{formatDate(message.time)}</div>
              )}
              <div className={`message ${message.sender === "me" ? "message-own" : ""}`}>
                {message.sender !== "me" && message.avatar && (
                  <img src={message.avatar} alt="Avatar" />
                )}
                <div className="texts">
                  {message.text.startsWith("http") ? (
                    <img
                      src={message.text}
                      alt="Shared"
                      style={{ maxWidth: "200px" }}
                    />
                  ) : (
                    <p>{message.text}</p>
                  )}
                  <span>{formatTime(message.time)}</span>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="Attach" />
          <img src="./camera.png" alt="Camera" />
          <img src="./mic.png" alt="Mic" />
        </div>

        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <div className="emoji">
          <img
            src="./emoji.png"
            alt="Emoji"
            onClick={() => setOpen((prev) => !prev)}
          />
          {open && (
            <div className="picker">
              <EmojiPicker onEmojiClick={handleEmoji} />
            </div>
          )}
        </div>

        <button className="sendButton" onClick={handleSend} disabled={!text.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
