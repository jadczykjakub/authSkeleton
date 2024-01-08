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

function App() {
  const { user } = useAuthContext();

  // const user = false;

  // const router = createBrowserRouter([
  //   { path: "/", element: user ? <Home /> : <Navigate to="/login" /> },
  //   { path: "/login", element: user ? <Login /> : <Navigate to="/" /> },
  //   { path: "/user", element: user ? <Register /> : <Navigate to="/" /> },
  // ]);
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
