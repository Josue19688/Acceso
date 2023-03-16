
import { AuthProvider } from "./context/Auth/AuthContext";
import { ChatProvider } from "./context/chat/ChatContext";
import { SocketProvider } from "./context/sockets/SocketContext";
import { AppRoutes } from "./routes/AppRoutes";


function App() {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRoutes/>
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
}

export default App;
