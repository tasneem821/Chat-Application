import Chat from "./components/chats/Chat"
import List from "./components/List/List"
const App = () => {
  return (
    <div className='container'>
      <List></List>
      <Chat></Chat>
    </div>
  )
}

export default App