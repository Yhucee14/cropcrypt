import "./App.css";
import Layout from "./components/Layout/Layout";
import SignUp from "./auth/SignUp";
import InvestPage from "./dashboard/InvestPage";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AssetPortfolio from "./dashboard/AssetPortfolio";
import Profile from "./components/Profile";
import CreateAsset from "./components/CreateAsset";
import NftPortfolio from "./dashboard/NftPortfolio";
import EditProfile from "./components/EditProfile";
import { useState } from "react";
import Signin from "./auth/Signin";
import VerifyEmail from "./auth/VerifyEmail";

function App() {
  // Simulating authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication logic

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to SignUp if not logged in */}

        <Route path="/" element={<SignUp />} />
        <Route path="/layout" element={<Layout />} />

        <Route path="/signin" element={<Signin />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/invest" element={<InvestPage />} />
        <Route path="/asset/:_id" element={<AssetPortfolio />} />
        <Route path="/createAsset" element={<CreateAsset />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/nft" element={<NftPortfolio />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
