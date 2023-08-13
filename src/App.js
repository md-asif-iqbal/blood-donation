import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import BloodReq from './Pages/BlodReq/BloodReq';
import Blog from './Pages/Blog/Blog';
import Donars from './Pages/Donars/Donars';
import Home from './Pages/Home/Home';
import MyProfiles from './Pages/MyProfile/MyProfiles';
import MyReqest from './Pages/MyReqest/MyReqest';
import Login from './Pages/Shared/Accounts/Login';
import Registation from './Pages/Shared/Accounts/Registation';
import ErrorPag from './Pages/Shared/Error/ErrorPag';
import './Style/Style.css'
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import RegisterDonor from './Pages/Donars/RegisterDonor';

const App = () => {
  return (
    <div>
      <Navbar />

        <Route path="/" element={<Home />}></Route>
        <Route path="/donars" element={<Donars />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Registation />}></Route>
        <Route path="/BloodReq" element={<BloodReq />}></Route>
        <Route path="/myProfile" element={<MyProfiles />}></Route>
        <Route path="/myRequest" element={<MyReqest />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="*" element={<ErrorPag />}></Route>
      </Routes>
      <RegisterDonor />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;