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
import SupplierInfo from "./pages/SuppliersInfo/SupplierInfo";
import Rfqs from "./pages/RFQs/Rfqs";
import AllCategories from "./pages/AllCategories/AllCategories";
import AllCategoriestwo from "./pages/AllCategories/AllCategoriestwo";
import OldmutualSupplierLandingPage from "./pages/OldMutual/OldMutualSupplierLandingPage";
import OldMutualSupplierMainLandingPage from "./pages/OldMutual/OldMutualSupplierMainLandingPage";
import Unauthorized from "./pages/Unauthorized/Unauthorized";

import BuyersDashboard from "./pages/Dashboard/BuyersDashboard/BuyersDashboard";
import BuyersMessageCenter from "./pages/Dashboard/BuyersDashboard/BuyersMessageCenter";
import BuyersOrders from "./pages/Dashboard/BuyersDashboard/BuyersOrders";
import BuyersOrderInfo from "./pages/Dashboard/BuyersDashboard/BuyersOrderInfo";
import BuyersRfqQuote from "./pages/Dashboard/BuyersDashboard/BuyersRfqQuote";
import BuyersRfqs from "./pages/Dashboard/BuyersDashboard/BuyersRfqs";
import BuyersSettings from "./pages/Dashboard/BuyersDashboard/BuyersSettings";
import BuyersRecievedQuote from "./pages/Dashboard/BuyersDashboard/BuyersRecievedQuote";

import SellersDashboard from "./pages/Dashboard/SellersDashboard/SellersDashboard";
import SellersMessageCenter from "./pages/Dashboard/SellersDashboard/SellersMessageCenter";
import SellersOrder from "./pages/Dashboard/SellersDashboard/SellersOrder";
import SellersOrderInfo from "./pages/Dashboard/SellersDashboard/SellersOrderInfo";
import SellersProducts from "./pages/Dashboard/SellersDashboard/SellersProducts";
import SellersNewProduct from "./pages/Dashboard/SellersDashboard/SellersNewProduct";
import SellersRfqs from "./pages/Dashboard/SellersDashboard/SellersRfqs";
import SellersSettings from "./pages/Dashboard/SellersDashboard/SellersSettings";
import SellersRfqInfo from "./pages/Dashboard/SellersDashboard/SellersRfqInfo";
import SellersRfqsQuote from "./pages/Dashboard/SellersDashboard/SellersRfqsQuote";
import SellersProductDescription from "./pages/Dashboard/SellersDashboard/SellersProductDescription";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-product" element={<ProductListing />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/buyers-registration" element={<BuyersRegistration />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route
            path="/sellers-registration"
            element={<SellersRegistration />}
          />
          <Route path="/rfqs" element={<Rfqs />} />
          <Route path="/allCategories" element={<AllCategories />} />
          <Route path="/allCategoriestwo" element={<AllCategoriestwo />} />
          <Route
            path="/oldmutual-Supplier-LandingPage"
            element={<OldmutualSupplierLandingPage />}
          />
          <Route
            path="/oldmutual-Supplier-main-LandingPage"
            element={<OldMutualSupplierMainLandingPage />}
          />
          <Route
            path="/sellers-landing-page"
            element={<SellersLandingPage />}
          />
          <Route path="/Supplier-info" element={<SupplierInfo />} />
          <Route path="/phone-verification" element={<PhoneVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:resetToken"
            element={<ResetPassword />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/buyer/dashboard" element={<BuyersDashboard />} />
          <Route
            path="/buyer/message-center"
            element={<BuyersMessageCenter />}
          />
          <Route path="/buyer/orders" element={<BuyersOrders />} />
          <Route path="/buyer/order-info" element={<BuyersOrderInfo />} />
          <Route path="/buyer/quotes" element={<BuyersRfqQuote />} />
          <Route path="/buyer/rfqs" element={<BuyersRfqs />} />
          <Route
            path="/buyer/recieved-quotes"
            element={<BuyersRecievedQuote />}
          />
          <Route path="/buyer/settings" element={<BuyersSettings />} />

          <Route path="/seller/dashboard" element={<SellersDashboard />} />
          <Route
            path="/seller/message-center"
            element={<SellersMessageCenter />}
          />
          <Route path="/seller/orders" element={<SellersOrder />} />
          <Route path="/seller/order-info" element={<SellersOrderInfo />} />
          <Route path="/seller/products" element={<SellersProducts />} />
          <Route path="/seller/new-product" element={<SellersNewProduct />} />
          <Route path="/seller/rfqs" element={<SellersRfqs />} />
          <Route path="/seller/settings" element={<SellersSettings />} />
          <Route path="/seller/rfqs-info" element={<SellersRfqInfo />} />
          <Route path="/seller/rfqs-quote" element={<SellersRfqsQuote />} />
          <Route
            path="/seller/productdescription"
            element={<SellersProductDescription />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
