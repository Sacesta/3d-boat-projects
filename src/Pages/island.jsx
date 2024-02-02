import React from 'react';
import ModelContainer from '../Components/ModelContainer';
import {
  modelParts,
  colorOptions,
  initialColors,
  variants,
} from '../Constants/island';

import Islandmodel from '../Components/Island252';
import { useLocation } from 'react-router-dom';

export default function Island() {
  const { pathname } = useLocation();

  return (
    <ModelContainer
      path={pathname}
      modelParts={modelParts}
      colorOptions={colorOptions}
      initialColors={initialColors}
      variants={variants}>
      <Islandmodel />
    </ModelContainer>
  );
}
