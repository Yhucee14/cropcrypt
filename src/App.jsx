import "./App.css";
import Layout from "./components/Layout/Layout";
import SignUp from './auth/SignUp';
import InvestPage from "./dashboard/InvestPage";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AssetPortfolio from "./dashboard/AssetPortfolio";
import Profile from "./components/Profile";
import CreateAsset from "./components/CreateAsset";
import NftPortfolio from "./dashboard/NftPortfolio";
import EditProfile from "./components/EditProfile";
import { useState } from "react";

function App() {
  // Simulating authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual authentication logic

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect to SignUp if not logged in */}
        <Route
          path="/"
          element={isLoggedIn ? <Layout /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/invest" element={isLoggedIn ? <InvestPage /> : <Navigate to="/signup" />} />
        <Route path="/asset/:_id" element={isLoggedIn ? <AssetPortfolio /> : <Navigate to="/signup" />} />
        <Route path="/createAsset" element={isLoggedIn ? <CreateAsset /> : <Navigate to="/signup" />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/signup" />} />
        <Route path="/nft" element={isLoggedIn ? <NftPortfolio /> : <Navigate to="/signup" />} />
        <Route path="/editProfile" element={isLoggedIn ? <EditProfile /> : <Navigate to="/signup" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
