import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";  
import Register from "./components/Register/Register";  
import GroupChat from './components/GroupChat/GroupChat';

import ChatPage from "./ChatPage"; // Create this if needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/chat/:groupId" element={<GroupChat />} />
         <Route path="/chat" element={<GroupChat />} />

      </Routes>
    </Router>
  );
};

export default App;
