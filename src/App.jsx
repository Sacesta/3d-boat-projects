import React, { Suspense, lazy, useEffect, useState } from 'react';
// import ModelSelector from "./Components/ModelSelector/ModelSelector";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Seacat from "./Pages/seacat.jsx";
// import Home from "./Pages/Home/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader.jsx';
const Home = lazy(() => import('./Pages/Home/Home.jsx'));
const Seacat = lazy(() => import('./Pages/seacat.jsx'));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFontsAndImages = async () => {
      const fontUrl1 = '/src/assets/Gilmer-Font/Gilmer_Regular.otf';
      const fontUrl2 = '/src/assets/Gilmer-Font/Gilmer_Bold.otf';
      const imageUrl = 'seacat-logo-black.png';
      const imageUrl2 = 'seacat-26.png';

      const customFont1 = new FontFace('CustomFont5', `url(${fontUrl1})`);
      const customFont2 = new FontFace('GilmerBold', `url(${fontUrl2})`);
      const imagePreload = new Image();
      const imagePreload2 = new Image();
      imagePreload.src = imageUrl;
      imagePreload2.src = imageUrl2;

      try {
        await Promise.all([
          customFont1.load(),
          customFont2.load(),
          new Promise((resolve, reject) => {
            imagePreload.onload = resolve;
            imagePreload.onerror = reject;
          }),
        ]);

        document.fonts.add(customFont1);
        document.fonts.add(customFont2);

        await document.fonts.ready;
      } catch (error) {
        console.error('Error loading resources:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    loadFontsAndImages();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sea-cat-26" element={<Seacat />} />
            </Routes>
          </Router>
        </Suspense>
      )}
    </>
  );
}
