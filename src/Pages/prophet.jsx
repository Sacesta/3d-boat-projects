import React from "react";
import ModelContainer from "../Components/ModelContainer";
import {
  modelParts,
  colorOptions,
  initialColors,
  variants,
  colorTypes,
  metallicColorOptions,
  carbonFiberOptions,
} from "../Constants/prophet";
import { Boat } from "../Components/Newprophet";

export default function Seacat() {
  return (
    <ModelContainer
      modelParts={modelParts}
      colorOptions={colorOptions}
      colorTypes={colorTypes}
      carbonFiberOptions={carbonFiberOptions}
      metallicColorOptions={metallicColorOptions}
      initialColors={initialColors}
      variants={variants}
    >
      <Boat />
    </ModelContainer>
  );
}
