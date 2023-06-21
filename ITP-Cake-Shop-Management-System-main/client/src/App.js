import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/AboutUs";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import OurCollection from "./components/OurCollection";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/User/Profile";
import Product from "./components/Product/Product";
import OitemDetailsA from "./components/Product/OitemDetails_A";
import UpdateOitem from "./components/Product/UpdateOitem";
import AddOrder from "./components/Order/AddOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/OurCollection" element={<OurCollection/>} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<HomePage />} />
        </Route>
        <Route path="/ForgotPassword" element={<ForgotPasssword/>} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/UserProfile" element={<Profile/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path='/product/admin/:id' element={<OitemDetailsA/>}></Route>
        <Route path='/product/admin/update/:id' element={<UpdateOitem/>}></Route>

        <Route path='/Product/:id/Order' element={<AddOrder/>}></Route>






    
      </Routes>
    </>
  );
}

export default App;