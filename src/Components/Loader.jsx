import React from "react";
import { Html } from "@react-three/drei";

function Loader({ isR3F }) {
  return isR3F ? (
    <Html
      style={{
        position: "absolute",
        maxWidth: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E6E9E0",
        zIndex: '999'
      }}
      center={true}
    >
      <img
        src="/seacat-loader.gif"
        alt="Loading animation"
        style={{
          height: "100vh",
          width: "100vw",
          objectFit: window.innerWidth < 700 ? "contain" : "",
        }}
      />
    </Html>
  ) : (
    <div
      style={{
        position: "absolute",
        maxWidth: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E6E9E0",
        zIndex: '999'
      }}
      center
    >
      <img
        src="/seacat-loader.gif"
        alt="Loading animation"
        style={{
          height: "100vh",
          width: "100vw",
          objectFit: window.innerWidth < 700 ? "contain" : "",
        }}
      />
    </div>
  );
}

export default Loader;
