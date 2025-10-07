import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainLayout from "./pages/MainLayout";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./features/cart/Cart";
import Collection from "./features/product/Collection";
import Home from "./pages/Home";
import Product from "./features/product/Product";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Collection />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
