import React,  { useState, useLayoutEffect } from 'react'
import "./colorWheel.css"

export default function ColorWheel({colorGroup, setColors, modelParts,activeIndex, setActiveColor, activeColor, materialType, colors, setMaterialType }) {
  const [array, setArray] = useState(colorGroup);

  const array2 = [
    { name: "Red", hex: "#FF0000" },
    { name: "Red", hex: "#FF3333" },
    { name: "Red", hex: "#FF6666" },
    { name: "Green", hex: "#00FF00" },
    { name: "Green", hex: "#33FF33" },
    { name: "Green", hex: "#66FF66" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Blue", hex: "#3333FF" },
    { name: "Blue", hex: "#6666FF" },
    { name: "Orange", hex: "#FFA500" },
    { name: "Orange", hex: "#FFB533" },
    { name: "Orange", hex: "#FFC966" },
    { name: "Purple", hex: "#800080" },
    { name: "Purple", hex: "#993399" },
    { name: "Purple", hex: "#B266B2" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Yellow", hex: "#FFFF33" },
    { name: "Yellow", hex: "#FFFF66" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Cyan", hex: "#33FFFF" },
  ];

  const totalColors = array.length;
  const angleIncrement = (2 * Math.PI) / totalColors;
  const radius = 60; // Adjust the radius as needed
  const startAngle = -Math.PI / 2; // Adjust the starting angle

  const desiredLength = 20;

  
  useLayoutEffect(() => {
    if (array.length < desiredLength) {
      const newArray = [...array];
  
      while (newArray.length < desiredLength) {
        newArray.push({ name: "disabled", hex: "#d2d2d2" });
      }
  
      setArray(newArray);
    }
  }, [activeIndex, array, desiredLength]);


  return (
    <div className='colorWheelCon'>
      {array.map((item, index) => {
          const angle = startAngle + index * angleIncrement;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          const width = (2 * Math.PI * radius) / totalColors; // Calculate width dynamically

          return (
            <button
              key={index}
              onClick={() => {
  
                  const selectedColor = {
                    name: item.name,
                    hex: item.tex ? item.tex : item.hex,
                  };

                  // Update the active color
                  setActiveColor((prevColors) => ({
                    ...prevColors,
                    [activeIndex]: selectedColor,
                  }));

                  // Set the colors
                  setColors(
                    {
                      part: modelParts[activeIndex],
                      hex: selectedColor.hex,
                    },
                    colorGroup
                  );

                  // Check if 'Deck Strip' material type is 'none' and update its color to match 'Top Deck'
                  if (materialType['Deck Strip'] === 'none') {
                    const topDeckColor = activeIndex === 1 ? selectedColor.hex : colors['Top Deck'];
                    setActiveColor((prevColors) => {
                      return {
                        ...prevColors,
                        'Deck Strip': topDeckColor,
                      };
                    });
                    setColors(
                      {
                        part: 'Deck Strip',
                        hex: topDeckColor,
                      },
                      colorGroup
                    );
                  }
  
              //   const selectedColor = {
              //     name: item.name,
              //     hex: item.tex ? item.tex : item.hex,
              // };
              //   setActiveColor((prevColors) => ({
              //     ...prevColors,
              //     [activeIndex]: {
              //       name: item.name,
              //       hex: item.tex ? item.tex : item.hex,
              //     },
              //   }));

              //   setColors(
              //     {
              //       part: modelParts[activeIndex],
              //       hex: item.tex ? item.tex : item.hex,
              //     },
              //     colorGroup
              //   );

              //   if (materialType['Deck Strip'] === 'none') {
              //   // console.log(':', modelParts, activeIndex, materialType, colors, item);

              //     // setActiveColor((prevColors) => ({
              //     //   ...prevColors,
              //     //   'Deck Strip': {
              //     //     name: 'Deck Strip',
              //     //     hex: materialType['Top Deck'],
              //     //   },
              //     // }));

              //     setActiveColor((prevColors) => ({
              //       ...prevColors,
              //       'Deck Strip': colors['Top Deck'] ? colors['Top Deck'] : selectedColor,
              //   }));

              //     // setColors(
              //     //   {
              //     //     part: '',
              //     //     hex: item.tex ? item.tex : item.hex,
              //     //   },
              //     //   colorGroup
              //     // );

              //     setColors({
              //       part: 'Deck Strip',
              //       hex: selectedColor.hex,
              //   }, colorGroup);
              //   }

              }}
              className={`palette ${
                item.name === 'disabled' ? ' disabled' : ''
              } ${activeColor[activeIndex]?.hex === item.hex ? 'active' : ''}`}
              style={{
                background: item.hex,
                width: `${width * 1.5}px`,
                height: `${width * 1.04}px`,
                position: 'absolute',
                top: `calc(50% - ${width / 2}px + ${y}px)`,
                left: `calc(50% - ${width / 2}px + ${x}px)`,
                transform: `translate(-10px, 0px) rotate(${angle}rad) perspective(${
                  width + 6
                }px) rotateY(-${width}deg)`, // Apply rotation
                pointerEvents: item.name === 'disabled' ? 'none' : 'auto', // Disable pointer events if item is disabled
              }}
            ></button>
          );
        })}
      </div>
  )
}
