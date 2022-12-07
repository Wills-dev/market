import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Authentication from "./pages/Authentication/Authentication";
import BuyersRegistration from "./pages/Authentication/BuyersRegistration";
import SellersLandingPage from "./pages/SellersLandingPage/SellersLandingPage";
import SellersRegistration from "./pages/Authentication/SellersRegistration";
import PhoneVerification from "./pages/Authentication/PhoneVerification";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Login from "./pages/Authentication/Login";
import ResetPassword from "./pages/Authentication/ResetPassword";
import ProductListing from "./pages/ProductListing/ProductListing";

import BuyersDashboard from "./pages/Dashboard/BuyersDashboard/BuyersDashboard";
import BuyersMessageCenter from "./pages/Dashboard/BuyersDashboard/BuyersMessageCenter";
import BuyersOrders from "./pages/Dashboard/BuyersDashboard/BuyersOrders";
import BuyersOrderInfo from "./pages/Dashboard/BuyersDashboard/BuyersOrderInfo";
import BuyersQuote from "./pages/Dashboard/BuyersDashboard/BuyersQuote";
import BuyersRfqs from "./pages/Dashboard/BuyersDashboard/BuyersRfqs";
import BuyersSettings from "./pages/Dashboard/BuyersDashboard/BuyersSettings";

import SellersDashboard from "./pages/Dashboard/SellersDashboard/SellersDashboard";
import SellersMessageCenter from "./pages/Dashboard/SellersDashboard/SellersMessageCenter";
import SellersOrder from "./pages/Dashboard/SellersDashboard/SellersOrder";
import SellersOrderInfo from "./pages/Dashboard/SellersDashboard/SellersOrderInfo";
import SellersProducts from "./pages/Dashboard/SellersDashboard/SellersProducts";
import SellersNewProduct from "./pages/Dashboard/SellersDashboard/SellersNewProduct";
import SellersRfqs from "./pages/Dashboard/SellersDashboard/SellersRfqs";
import SellersSettings from "./pages/Dashboard/SellersDashboard/SellersSettings";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-product" element={<ProductListing />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/buyers-registration" element={<BuyersRegistration />} />
          <Route path="/sellers-registration"  element={<SellersRegistration />} />
          <Route path="/sellers-landing-page" element={<SellersLandingPage />} />
          <Route path="/phone-verification" element={<PhoneVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />

          <Route path="/buyer/dashboard" element={<BuyersDashboard />} />
          <Route path="/buyer/message-center" element={<BuyersMessageCenter />} />
          <Route path="/buyer/orders" element={<BuyersOrders />} />
          <Route path="/buyer/order-info" element={<BuyersOrderInfo />} />
          <Route path="/buyer/quotes" element={<BuyersQuote />} />
          <Route path="/buyer/rfqs" element={<BuyersRfqs />} />
          <Route path="/buyer/settings" element={<BuyersSettings />} />
          
          <Route path="/seller/dashboard" element={<SellersDashboard />} />
          <Route path="/seller/message-center" element={<SellersMessageCenter />} />
          <Route path="/seller/orders" element={<SellersOrder />} />
          <Route path="/seller/order-info" element={<SellersOrderInfo />} />
          <Route path="/seller/products" element={<SellersProducts />} />
          <Route path="/seller/new-product" element={<SellersNewProduct />} />
          <Route path="/seller/rfqs" element={<SellersRfqs />} />
          <Route path="/seller/settings" element={<SellersSettings />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
