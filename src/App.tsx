import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AppRoutes from "./AppRoutes";
import { TaskProvider } from "./context/TaskContext";

function App() {
  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect: login,
    logout: auth0Logout,
    user,
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return <p>Loading...</p>;

  if (!isAuthenticated) {
    return (
      <div>
        {error && <p>Error: {error.message}</p>}
        <button onClick={signup}>Signup</button>
        <button onClick={() => login()}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </BrowserRouter>

      <p className="footer"> Logged in as {user?.email}</p>
      <button onClick={logout} className="smallerbutton">Logout</button>
    </div>
  );
}

export default App;
