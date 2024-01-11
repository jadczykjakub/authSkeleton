import React, {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import useAuthContext from "./hooks/useAuthContext.js";
import NavBar from './Layout/NavBar.js';
import { ProtectedRoute } from "./routes/ProtectedRoute.js";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

        <div className="pages">
          <Routes>
 
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="/"
              element={<ProtectedRoute/>}
            >
              <Route path="/" element={<Home />} />
            </Route>

            {/* <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            /> */}
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
