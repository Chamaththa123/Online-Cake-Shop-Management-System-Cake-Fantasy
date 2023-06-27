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
import OitemDetailsC from "./components/Product/Oitemdetails_C";
import UpdateOitem from "./components/Product/UpdateOitem";
import AddOrder from "./components/Order/AddOrder";
import Order from "./components/Order/Order";
import OrderDetailsA from "./components/Order/OrderDetailsA";
import UpdateOrder from "./components/Order/UpdateOrder";
import User from "./components/User/User";
import Contact from "./components/ContactUs/Contact";
import AllContact from "./components/ContactUs/AllContact";
import ContactDetails from "./components/ContactUs/ContactDetails";
import DeliveryArea from "./components/DeliveryArea";
import FAQ from "./components/FAQ";

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
        <Route path="/user/admin/allusers" element={<User/>} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/UserProfile" element={<Profile/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path='/product/admin/:id' element={<OitemDetailsA/>}></Route>
        <Route path='/product/:id' element={<OitemDetailsC/>}></Route>
        <Route path='/product/admin/update/:id' element={<UpdateOitem/>}></Route>

        <Route path='/Product/:id/Order' element={<AddOrder/>}></Route>
        <Route path='/order/admin/allorders' element={<Order/>}></Route>
        <Route path='/order/admin/:id' element={<OrderDetailsA/>}></Route>
        <Route path='/order/admin/update/:id' element={<UpdateOrder/>}></Route>

        <Route path='/ContactUs' element={<Contact/>}></Route>
        <Route path='/AllContact' element={<AllContact/>}></Route>
        <Route path='/contact/admin/:id' element={<ContactDetails/>}></Route>


        <Route path='/DeliveryArea' element={<DeliveryArea/>}></Route>
        <Route path='/FAQ' element={<FAQ/>}></Route>




    
      </Routes>
    </>
  );
}

export default App;