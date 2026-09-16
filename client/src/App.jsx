import { useEffect, useState } from "react";
import { checkBackend } from "./services/api";

function App() {
  const [backendMessage, setBackendMessage] = useState(
    "Connecting to EcoBridge backend..."
  );

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    checkBackend()
      .then((data) => {
        setBackendMessage(data.message);
        setIsConnected(true);
      })
      .catch((error) => {
        console.error("Backend connection error:", error);
        setBackendMessage("Backend connection failed");
        setIsConnected(false);
      });
  }, []);

  return (
    <div>
      <h1>EcoBridge</h1>

      <p>
        Bridging Waste to the Right Hands
      </p>

      <hr />

      <h2>System Status</h2>

      <p>
        {isConnected ? "🟢" : "🔴"} {backendMessage}
      </p>
    </div>
  );
}

export default App;