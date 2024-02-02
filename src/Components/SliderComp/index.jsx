import React from "react";
import "./index.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="arrowNext"
      onClick={onClick}
    >
        <img src="./right.svg" alt="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
    className="arrowPrev"
    onClick={onClick}
    >
        <img src="./left.svg" alt="" />
    </div>
  );
}

export default function SliderComp() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,  // Set slidesToShow to 1.3
    centerPadding: "22.5%",
    speed: 700,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
      autoplaySpeed: 10000,
      cssEase: "ease",

    responsive: [
      {
        breakpoint: 600,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "0px",
          slidesToShow: 1,
          speed: 700,
          swipeToSlide: true,
        },
      },
    ],
  };

  const boats = [
    
    {
      title: "A'Lure",
      src: "/alure.png",
      url: "/Alure",
    },
    {
      title: "Island Breeze",
      src: "/island.png",
      url: "/Island",
    },
    {
      title: "Atlantis",
      src: "/atlantis.png",
      url: "/Atlantis",
    },
    {
      title: "Signature",
      src: "/Signature.png",
      url: "/Signature",
    },
  ];

  
  return (
    <section className="SliderCompSec">
      <Slider {...settings}>
        {boats.map((boat, index) => {
          return (
            <div key={index} className="boatCardWrapper">
              <div className="boatCard">
                <h3>{boat.title}</h3>
                <img src={boat.src} alt={boat.title} />
                <a href={boat.url}>
                <button>
                    build your boat
                </button>
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
      <p className="note">This is a simulated representation of our models, actual color / shape may differ. Contact our facility regarding your specific order.</p>
    </section>
  );
}
