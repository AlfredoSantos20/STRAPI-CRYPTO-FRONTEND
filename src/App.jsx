import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example function to handle sign-in
  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard isAuthenticated={isAuthenticated} />} />
      <Route path="/auth/*" element={<Auth onSignIn={handleSignIn} />} />
      <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;

