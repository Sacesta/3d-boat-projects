import React from 'react';
import ModelContainer from '../Components/ModelContainer';
import {
  modelParts,
  colorOptions,
  initialColors,
  variants,
} from '../Constants/signature';
import { useLocation } from 'react-router-dom';

// import { Signaturemodel } from "../Components/Signature2500";
import { Signature2500 } from '../Components/S2500';
export default function Signature() {
  const { pathname } = useLocation();

  return (
    <ModelContainer
      path={pathname}
      modelParts={modelParts}
      colorOptions={colorOptions}
      initialColors={initialColors}
      variants={variants}>
      <Signature2500 />
      {/* <Signaturemodel /> */}
    </ModelContainer>
  );
}
