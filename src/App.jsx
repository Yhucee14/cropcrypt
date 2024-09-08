import "./App.css";
import Layout from "./components/Layout/Layout";
import SignUp from './routes/SignUp';
import Dashboard from "./dashboard/Dashboard";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssetPortfolio from "./dashboard/AssetPortfolio";
import SectionThree from "./dashboard/SectionThree";
import CreateAsset from "./components/CreateAsset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/asset" element={<AssetPortfolio />} />
        <Route path="/createAsset" element={<CreateAsset />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
