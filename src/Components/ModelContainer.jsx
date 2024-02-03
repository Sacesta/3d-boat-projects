import * as THREE from "three";
import React, { Suspense, useRef, useMemo, useState, useEffect } from "react";
import {
  Canvas,
  extend,
  useThree,
  useLoader,
  useFrame,
} from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { BsFillEyeFill } from "react-icons/bs";
import { Water } from "three/examples/jsm/objects/Water.js";
import ColorContainer from "./ColorContainer";
import useColorStore from "../Utils/store";
import "../App.css";
import { captureScreenshot } from "../functions";
import Menu from "./Menu/Menu";
import Loader from "./Loader";
import useMenuStore from "../Utils/menuStore";
import useImageStore from "../Utils/imageStore";
import PDFDocument from "./PDFDoucment";
import { PDFDownloadLink } from "@react-pdf/renderer";

//extend
extend({ Water });

function Ocean({ setModelLoaded }) {
  const ref = useRef();
  const gl = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, "/waternormals.jpg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(2000, 2000), []);
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x174017,
      waterNormals,
      distortionScale: 0.3,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );

  useEffect(() => {
    setModelLoaded(true);
  }, []);

  useFrame(
    (state, delta) =>
      (ref.current.material.uniforms.time.value += delta * 0.155)
  );
  return (
    <water
      ref={ref}
      args={[geom, config]}
      rotation-x={-Math.PI / 2}
      position={[0, -0.45, 0]}
    />
  );
}

export default function ModelContainer({
  children,
  modelParts,
  colorOptions,
  initialColors,
  colorTypes,
  metallicColorOptions,
  carbonFiberOptions,
  variants,
}) {
  const [scene, setScene] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [showColorContainer, setShowColorContainer] = useState(false);

  const { selectedOptions, selectionModel } = useMenuStore();
  const { setActiveState, setInitialColors, colors } = useColorStore();
  const updateSelection = useMenuStore((state) => state.updateSelection);
  const { selectedImage, setSelectedImage } = useImageStore();

  const canvasRef = useRef();

  // useEffect(() => {
  //   setInitialColors(initialColors);
  //   updateSelection(variants[Object.keys(variants)[0]].initialOptions);
  // }, []);

  useEffect(() => {
    setSelectedImage(variants[Object.keys(variants)].images[0])
    setInitialColors(initialColors);
    updateSelection(variants[Object.keys(variants)[0]].initialOptions);
  }, []);
  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    setShowColorContainer(false);
  };

  // const handleCaptureScreenshot = async () => {
  //   const canvas = document.querySelector(".print");
  //   const selectedOptions = useMenuStore.getState().selectedOptions;
  //   const selectedImage = useImageStore.getState().selectedImage;
  //   const pdf = await captureScreenshot(canvas, selectedOptions, selectedImage);

  //   pdf.save("screenshot.pdf");
  // };

  const handleColorClick = () => {
    if (showColorContainer) setActiveState(0);

    setShowColorContainer((prevShow) => !prevShow);
    setShowMenu(false);
  };

  return (
    <div id="canvasComponent" style={{ height: "100vh", width: "100vw" }}>
      <Canvas
        ref={canvasRef}
        className="print"
        camera={{ position: [0, 5, 100], fov: 45, near: 1, far: 20000 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader isR3F />}>
          {scene ? (
            <Environment
              background={true}
              files={"/Environment/rocky_ridge_puresky_4k.hdr"}
            />
          ) : (
            <Environment
              background={true}
              files={"/Environment/kloppenheim_07_puresky_2k.hdr"}
            />
          )}
          <Ocean setModelLoaded={setModelLoaded} />

          {children}
        </Suspense>

        <OrbitControls
          maxPolarAngle={Math.PI * 0.45}
          rotateSpeed={0.6}
          panSpeed={0.6}
          enableZoom={true}
          minDistance={3.3}
          maxDistance={10}
          enablePan={false}
        />
      </Canvas>

      {modelLoaded && (
        <div className="options-wrap">
          {/*go back button*/}
          {/* <div
            onClick={() => {
              window.location.href = "/";
            }}
            className='go-back'
          >
            <button className='button-pdf'>Go Back</button>
          </div> */}
          {/*download pdf button*/}
          <div className="download-pdf">
             <PDFDownloadLink
              document={
                <PDFDocument
                  selectedOptions={selectedOptions}
                  colors={colors}
                  selectedImage={selectedImage}
                  model={selectionModel}
                />
              }
            > *
              <button className="button-pdf">Download PDF</button>
             </PDFDownloadLink> 
          </div>
          <div className="menu-icon-wrapper">
            {/*menu button*/}
            <div className="menu-button">
            <button className="button-menu">
              {/* <button onClick={toggleMenu} className="button-menu"> */}
                Visit Store
                </button>   {/* </button> */}
            </div>
            {/*Icons */}
            <div className="icon-container">
              <div
                className="icon"
                onClick={() => {
                  if (!previewMode) setActiveState(0);
                  setPreviewMode(!previewMode);
                }}
              >
                <BsFillEyeFill
                  size={28}
                  style={{ padding: "3px", color: "#213547" }}
                />
              </div>
              {!previewMode && (
                <>
                  {" "}
                  <div onClick={handleColorClick} className="icon">
                    <img src="/color.png" alt="arrow" />
                  </div>
                  <div className="icon" onClick={() => setScene(!scene)}>
                    <img
                      src={scene ? "/sun_icon.png" : "/sunset_icon.png"}
                      alt="arrow"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {showColorContainer && !previewMode && (
        <ColorContainer
          show={showColorContainer}
          modelParts={modelParts}
          carbonFiberOptions={carbonFiberOptions}
          colorOptions={colorOptions}
          handleColorClick={handleColorClick}
          colorTypes={colorTypes}
          metallicColorOptions={metallicColorOptions}
        />
      )}

      {showMenu && <Menu variants={variants} onClick={() => toggleMenu()} />}
    </div>
  );
}
