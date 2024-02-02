import React, { useState, useEffect } from "react";
import backgroundImage from "/bg.png"; // Import your image here
import "./index.css"; // Import your CSS file here if needed
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Loader from "../Loader";
import NavbarComp from "../NavbarComp";
import HeaderComp from "../HeaderComp";
import SliderComp from "../SliderComp";
import FooterComp from "../FooterComp/index.jsx";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ModelSelector() {
  const [componentReady, setComponentReady] = useState(false);
  const [stripeColor, setStripeColor] = useState("#A9BBC2");
  const [focusedImageName, setFocusedImageName] = useState("A'Lure"); // Initialize with the name of the first image
  const [imageLink, setImageLink] = useState("/Alure");
  const images = [
    { name: "A'Lure", path: "/alure.png", link: "/Alure" },
    { name: "Island Breeze", path: "/island.png", link: "/Island" },
    { name: "Atlantis", path: "/atlantis.png", link: "/Atlantis" },
    { name: "Signature", path: "/Signature.png", link: "/Signature" },
  ];

  var settings = {
    speed: 400,
    slidesToShow: window.innerWidth < 500 ? 1 : window.innerWidth < 729 ? 2 : 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",

    afterChange: (current) => {
      const image = images[current];
      setFocusedImageName(image.name);
      switch (image.path) {
        case "/alure.png":
          setStripeColor("#A9BBC2");
          setImageLink("/Alure");
          break;
        case "/atlantis.png":
          setStripeColor("#BFA887");
          setImageLink("/Atlantis");
          break;
        case "/island.png":
          setStripeColor("#8B8682");
          setImageLink("/Island");
          break;
        case "/Signature.png":
          setStripeColor("#d19258");
          setImageLink("/Signature");
          break;
        default:
          setStripeColor("#A9BBC2"); // Default to alure color
          setImageLink("/Alure");
      }
    },
  };

  useEffect(() => {
    // Simulate loading with a delay (2 seconds in this example)
    setTimeout(() => {
      setComponentReady(true);
    }, 3000);
  }, []);

  return (
    <>
      {!componentReady ? (
        <Loader /> // Display the loader while the component is not ready
      ) : (
        <>
        <NavbarComp/>
        <HeaderComp/>
        <SliderComp/>
        <FooterComp/>
          <div style={{display:"none"}} className='page-container'>
            <img
              src={backgroundImage}
              alt='Background'
              className='background-image'
            />
            <div className='centered-text'>
              <span>CHOOSE YOUR LANDAU</span>
            </div>
            <button
              className='back-button'
              onClick={() => {
                window.location.href = "https://landauboats.com/";
              }}
            >
              Back to Website
            </button>
            <div className='stripe-div'>
              <div
                className='colored-stripe top-stripe'
                style={{ backgroundColor: stripeColor }}
              ></div>
              <div
                className='colored-stripe-1 top-stripe'
                style={{ backgroundColor: stripeColor }}
              ></div>
            </div>
            <div className='slider-container'>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className={`boat-img-container `}>
                    <img
                      className='boat-img'
                      src={image.path}
                      alt={`Image ${index}`}
                      key={index}
                    />
                  </div>
                ))}
              </Slider>
              <div className='focused-image-name'>
                <span>{focusedImageName}</span>
                <button
                  onClick={() => {
                    window.location.href = imageLink;
                  }}
                  className='boat-selector'
                  style={{
                    backgroundColor: stripeColor,
                    borderColor: stripeColor,
                  }}
                  onPointerOver={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = stripeColor;
                  }}
                  onPointerOut={(e) => {
                    e.target.style.backgroundColor = stripeColor;
                    e.target.style.color = "white";
                  }}
                >
                  Build your boat
                </button>
              </div>
            </div>
            <div className='bottom-text'>
              This is a simulated representation of our models, actual color /
              shape may differ. Contact our facility regarding your specific
              order.
            </div>
          </div>
          <div style={{display:"none"}} className='page-container-mobile'>
            <div className='top'>
              <div className='centered-text'>
                <span>CHOOSE YOUR LANDAU</span>
              </div>
              <button
                onClick={() => {
                  window.location.href = "https://landauboats.com/";
                }}
              >
                Back to Website
              </button>
            </div>
            <div className='slider-container'>
              <div className='stripe-div'>
                <div
                  className='colored-stripe top-stripe'
                  style={{ backgroundColor: stripeColor }}
                ></div>
                <div
                  className='colored-stripe-1 top-stripe'
                  style={{ backgroundColor: stripeColor }}
                ></div>
              </div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`boat-img-container ${index === 1 ? "" : ""}`}
                  >
                    <img
                      className='boat-img'
                      src={image.path}
                      alt={`Image ${index}`}
                      key={index}
                    />
                  </div>
                ))}
              </Slider>
              <div className='focused-image-name'>
                <span>{focusedImageName}</span>
                <button
                  onClick={() => {
                    window.location.href = imageLink;
                  }}
                  className='boat-selector'
                  style={{
                    backgroundColor: stripeColor,
                    borderColor: stripeColor,
                  }}
                  onPointerOver={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = stripeColor;
                  }}
                  onPointerOut={(e) => {
                    e.target.style.backgroundColor = stripeColor;
                    e.target.style.color = "white";
                  }}
                >
                  Build your boat
                </button>
              </div>
            </div>
            <div className='bottom-text'>
              This is a simulated representation of our models, actual color /
              shape may differ. Contact our facility regarding your specific
              order.
            </div>
          </div>
        </>
      )}
    </>
  );
}
