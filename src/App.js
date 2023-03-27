
import { AuthProvider } from "./context/Auth/AuthContext";
import { ChatProvider } from "./context/chat/ChatContext";
import { SocketProvider } from "./context/sockets/SocketContext";
import { AppRoutes } from "./routes/AppRoutes";

import moment from "moment";
import 'moment/locale/es';
import { VisitaProvider } from "./context/Visita/visitaContext";
import { NovedadProvider } from "./context/novedades/novedadContext";
moment.locale('es');

function App() {
  return (
    <NovedadProvider>
      <VisitaProvider>
        <ChatProvider>
          <AuthProvider>
            <SocketProvider>
              <AppRoutes/>
            </SocketProvider>
          </AuthProvider>
        </ChatProvider>
      </VisitaProvider>
    </NovedadProvider>
  );
}

export default App;
