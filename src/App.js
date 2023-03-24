
import { AuthProvider } from "./context/Auth/AuthContext";
import { ChatProvider } from "./context/chat/ChatContext";
import { SocketProvider } from "./context/sockets/SocketContext";
import { AppRoutes } from "./routes/AppRoutes";

import moment from "moment";
import 'moment/locale/es';
import { VisitaProvider } from "./context/Visita/visitaContext";
moment.locale('es');

function App() {
  return (
    <VisitaProvider>
      <ChatProvider>
        <AuthProvider>
          <SocketProvider>
            <AppRoutes/>
          </SocketProvider>
        </AuthProvider>
      </ChatProvider>
    </VisitaProvider>
  );
}

export default App;
