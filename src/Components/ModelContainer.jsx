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

import DownloadLink from "./DownloadLink";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "./PDFDoucment";

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
      distortionScale: 1.5,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );

  useEffect(() => {
    setModelLoaded(true);
  }, []);

  useFrame(
    (state, delta) => (ref.current.material.uniforms.time.value += delta * 1)
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
  variants,
}) {
  const [scene, setScene] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const [showColorContainer, setShowColorContainer] = useState(false);
  const { selectedImage, setSelectedImage } = useImageStore();

  const initiallySelected = Object.keys(variants)[0];

  const [selectedModel, setSelectedModel] = useState(initiallySelected);

  const { colors, setActiveState, setInitialColors } = useColorStore();
  const { selectedOptions, selectionModel } = useMenuStore();
  const updateSelection = useMenuStore((state) => state.updateSelection);

  const canvasRef = useRef();

  useEffect(() => {
    setInitialColors(initialColors);
    updateSelection(variants[Object.keys(variants)[0]].initialOptions);
  }, []);
  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
    setShowColorContainer(false);
  };

  const handleCaptureScreenshot = async () => {
    const canvas = document.querySelector(".print");
    const selectedOptions = useMenuStore.getState().selectedOptions;
    // const selectedImage = useImageStore.getState().selectedImage;
    const pdf = await captureScreenshot(canvas, selectedOptions);

    pdf.save("screenshot.pdf");
  };

  const handleColorClick = () => {
    if (showColorContainer) setActiveState(0);

    setShowColorContainer((prevShow) => !prevShow);
    setShowMenu(false);
  };

  useEffect(()=>{
    // console.log('Use img',selectedImage);
    // console.log('Use variants',variants);
    const firstKey = Object.keys(variants)[0];
    const image = variants[firstKey].images[0]

    setSelectedImage(image ? image : null);

  }, [])

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
          minDistance={12}
          maxDistance={35}
          enablePan={false}
        />
      </Canvas>

      {modelLoaded && (
        <div className="options-wrap">
          {/*go back button*/}
          <div
            onClick={() => {
              window.location.href = "/";
            }}
            className="go-back"
          >
            <button className="button-pdf">Go Back</button>
          </div>
          {/*download pdf button*/}
          <div className="download-pdf">
            <DownloadLink selectedModel={selectedModel} />
          </div>
          <div className="menu-icon-wrapper">
            {/*menu button*/}
            <div className="menu-button">
              <button onClick={toggleMenu} className="button-menu">
                Edit Features
              </button>
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
                  <div className="icon" onClick={handleColorClick}>
                    <img src="/color.png" alt="color" />
                  </div>
                  <div className="icon" onClick={() => setScene(!scene)}>
                    <img
                      src={scene ? "/sun_icon.png" : "/sunset_icon.png"}
                      alt="scene"
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
          colorOptions={colorOptions}
        />
      )}

      {showMenu && (
        <Menu
          variants={variants}
          initiallySelected={initiallySelected}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}
