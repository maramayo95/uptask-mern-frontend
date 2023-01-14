import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import ForgotPasswordToken from "./pages/ForgotPasswordToken";
import ConfirmAccount from "./pages/ConfirmAccount";
import { AuthProvider } from './context/AuthProvider'
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="forgot-password/:token" element={<ForgotPasswordToken />} />
            <Route path="new-password" element={<NewPassword />} />
            <Route path="confirm-account/:token" element={<ConfirmAccount />} />
          </Route>
          
         {/* Protected Routes  */}
          <Route path="/projects" element={<ProtectedRoutes />}>
            <Route index element={<Projects />} />
            <Route path="create-project" element={<NewProject/>}/>
          </Route>
        </Routes>

      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
