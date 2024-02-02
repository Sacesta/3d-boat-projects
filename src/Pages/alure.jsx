import React from 'react';
import ModelContainer from '../Components/ModelContainer';
import {
  modelParts,
  colorOptions,
  initialColors,
  variants,
} from '../Constants/alure';
import { Aluremodel } from '../Components/aluremodel';
import { useLocation } from 'react-router-dom';

export default function Alure() {
  const { pathname } = useLocation();
  return (
    <ModelContainer
      path={pathname}
      modelParts={modelParts}
      colorOptions={colorOptions}
      initialColors={initialColors}
      variants={variants}>
      <Aluremodel />
    </ModelContainer>
  );
}
