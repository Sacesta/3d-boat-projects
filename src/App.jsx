import React, { useEffect, useState } from "react";
// import ModelSelector from "./Components/ModelSelector/ModelSelector";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Seacat from "./Pages/seacat.jsx";
import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./Components/Loader.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fakeAsyncOperation = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating a 2-second delay
      setLoading(false);
    };

    fakeAsyncOperation();
  }, []);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sea-cat-26" element={<Seacat />} />
        </Routes>
      )}
    </Router>
  )
}
