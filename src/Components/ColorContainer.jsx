import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import useColorStore from "../Utils/store";
import ColorWheel from "./colorWheel";
import { Select, MenuItem, useEventCallback } from "@mui/material";

function ColorContainer({
  handleColorClick,
  show,
  modelParts,
  colorOptions,
  colorTypes,
  carbonFiberOptions,
  metallicColorOptions,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeColor, setActiveColor] = useState({});
  const [colorGroup, setColorGroup] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const colorGroupRef = useRef("a");
  const {
    setColors,
    colors,
    setActiveState,
    setCarbonTexture,
    activeState,
    setMaterialType,
    materialType
  } = useColorStore();
  const sliderRef = useRef(null);

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    if (show) setActiveState(modelParts[activeIndex]);
  }, [activeIndex]);

  const totalSlides = modelParts.length;

  useLayoutEffect(() => {
    setColorGroup(() => {
      if (colorTypes[activeIndex][selectedType[activeIndex]] === "metallic") {
        return chunkArray(metallicColorOptions[modelParts[activeIndex]], 20);
      } else {
        return chunkArray(colorOptions[modelParts[activeIndex]], 20);
      }
    });
    colorGroupRef.current = activeIndex.toString();
  }, [activeIndex]);

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  useLayoutEffect(() => {
    modelParts.map((part, index) => {
      setActiveColor((prevColors) => ({
        ...prevColors,
        [index]: {
          name: colorOptions[modelParts[index]][0].name,
          hex: colorOptions[modelParts[index]][0].hex,
        },
      }));
    });

    const initialSelectedTypes = modelParts.map(() => 0);
    setSelectedType(initialSelectedTypes);
  }, []);

  useEffect(()=>{
    console.log('colors ',colors);
  },[materialType,activeState,activeIndex])
  return (
    <div className="color-wrapper">
      <button onClick={handleColorClick} className="cross">
        <AiOutlineClose />
      </button>
      <div className="color-container">
        <div className="slider-color">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            centerMode={true}
            centerPadding={"0px"}
            className="slider"
            ref={sliderRef}
            initialSlide={activeIndex}
            afterChange={(index) => setActiveIndex(index)}
          >
            {modelParts.map((part, index) => (
              <div key={index} className="color-card">
                <div className="color-card-title">
                  <div onClick={handlePrev} style={{ cursor: "pointer" }}>
                    <GrPrevious className="color-card-icon" />
                  </div>
                  <span>{part}</span>
                  <div onClick={handleNext} style={{ cursor: "pointer" }}>
                    <GrNext className="color-card-icon" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="select-con">
          <select
            value={materialType[activeState] || 'normal'}
            // value={"default"}
            onChange={(e) => {
              setMaterialType({
                name: activeState,
                type: e.target.value
              });
              if (e.target.value === "defautl") return;
              setSelectedType((prevType) => ({
                ...prevType,
                [activeIndex]: e.target.value,
              }));

              setColorGroup(() => {
                // console.log(colorTypes[activeIndex][selectedType[activeIndex]],)
                // console.log(colorTypes[activeIndex][selectedType[activeIndex]])
                if (colorTypes[activeIndex][e.target.value] === "metallic") {
                  return chunkArray(
                    metallicColorOptions[modelParts[activeIndex]],
                    20
                  );
                } else {
                  return chunkArray(colorOptions[modelParts[activeIndex]], 20);
                }
              });

              colorGroupRef.current = (
                activeIndex +
                e.target.value +
                100
              ).toString();
              // setOptions(variants[e.target.value].options);
              // updateSelection(variants[e.target.value].initialOptions);
            }}
            // sx={{ height: 40, width: "100%", mb: 2 }}
            // MenuProps={{
            //   PaperProps: {
            //     style: {
            //       width: "200px", // Set the desired width for the pop-up menu
            //     },
            //   },
            // }}
          >
            {colorTypes[activeIndex].map((type, index) => (
              <option key={index} value={type} sx={{ fontSize: 12 }}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="colors-div custom-scroller">
          <div className="color-inner-div">
            {!(
              colorTypes[activeIndex][selectedType[activeIndex]] ===
              "carbonFiber"
            ) ? (
              <div className="color-cycle" key={colorGroupRef.current}>
                {colorGroup.map((group, index) => {
                  return (
                    <ColorWheel
                      activeColor={activeColor}
                      setActiveColor={setActiveColor}
                      modelParts={modelParts}
                      activeIndex={activeIndex}
                      setColors={setColors}
                      colorGroup={group}
                      key={index}
                      materialType={materialType}
                      colors={colors}
                      setMaterialType={setMaterialType}
                    />
                  );
                })}
              </div>
            ) : (
              carbonFiberOptions[modelParts[activeIndex]] &&
              carbonFiberOptions[modelParts[activeIndex]].map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    margin: "5px",
                    fontSize: "15px",
                  }}
                >
                  <div
                    className="color-box"
                    style={{
                      backgroundColor: item.hex,
                      backgroundImage: `url(${item.img})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "40px",
                      width: "80px",
                      borderRadius: "5px",
                      marginRight: "12px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setCarbonTexture({
                        name: activeState,
                        material:
                          item.textureSrc !== " " ? item.textureSrc : item.img,
                      });
                      setActiveColor((prevColors) => ({
                        ...prevColors,
                        [activeIndex]: {
                          name: item.name,
                          hex: item.hex,
                        },
                      }));
                      setColors(
                        {
                          part: modelParts[activeIndex],
                          hex: item.tex ? item.tex : item.hex,
                        },
                        colors
                      );
                    }}
                  ></div>

                  {item.name}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Show slide number indicator at the bottom */}
        <div className="slide-indicator">
          <p
            // style={{ background: activeColor[activeIndex]?.hex }}
            style={{ background: "#B5D336" }}
            className="color-name"
          >
            <span>"{activeColor[activeIndex]?.name}"</span>
          </p>
          <div className="indicator">
            <div className="slide-indicator-line" />
            {activeIndex + 1}/{totalSlides}
            <div className="slide-indicator-line" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorContainer;
