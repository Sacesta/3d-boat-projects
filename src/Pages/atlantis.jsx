import React from 'react';
import ModelContainer from '../Components/ModelContainer';
import {
  modelParts,
  colorOptions,
  initialColors,
  variants,
} from '../Constants/atlantis';
import Atlantismodel from '../Components/Atlantis230';
import { useLocation } from 'react-router-dom';

export default function Atlantis() {
  const { pathname } = useLocation();

  return (
    <ModelContainer
      path={pathname}
      variants={variants}
      modelParts={modelParts}
      colorOptions={colorOptions}
      initialColors={initialColors}>
      <Atlantismodel />
    </ModelContainer>
  );
}
