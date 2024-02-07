import React from "react";
import ModelContainer from "../Components/ModelContainer";
import {
  modelParts,
  colorOptions,
  initialColors,
  variants,
} from "../Constants/seacat";
import { SeaCattt } from "../Components/Seacat3";

export default function Seacat() {
  return (
    <ModelContainer
      modelParts={modelParts}
      colorOptions={colorOptions}
      initialColors={initialColors}
      variants={variants}
    >
      <SeaCattt />
    </ModelContainer>
  );
}
