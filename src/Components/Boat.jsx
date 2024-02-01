import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import useColorStore from "../Utils/store";

export function Boatt(props) {
  const { nodes, materials } = useGLTF("/models/boat.glb");

  const { colors, materialType } = useColorStore();

  const carbonFiberTexture = useTexture("/textures/carbon-fiber/1.png");
  const metallicTexture = useTexture("/textures/metallic/0.png");

  return (
    <group {...props} scale={0.01} position={[0, -0.356, 0]} dispose={null}>
      <group position={[-3.56, 0, 0]}>
        
        <mesh
        
          geometry={nodes.GEO_prophet1001.geometry}
          material={materials.body_1001}
          material-color={colors["Base Body"]}
          material-map={
            materialType["Base Body"] === "metallic"
              ? metallicTexture
              : undefined
          }
        />
        <mesh
          geometry={nodes.GEO_prophet1002.geometry}
          material={materials["body_1002.001"]}
          material-color={colors["Base Body"]}
          material-map={
            materialType["Base Body"] === "metallic"
              ? metallicTexture
              : undefined
          }
        />
        
        <mesh
          geometry={nodes.GEO_prophet1003.geometry}
          material={materials["topCover_1001.001"]}
          material-color={colors["Base Body"]}
          material-map={
            materialType["Base Body"] === "metallic"
              ? metallicTexture
              : undefined
          }
        />
        <mesh
          geometry={nodes.GEO_prophet1004.geometry}
          material={materials["topCover_1002.001"]}
          material-color={colors["Base Body"]}
          material-map={
            materialType["Base Body"] === "metallic"
              ? metallicTexture
              : undefined
          }
        />
        <mesh
          geometry={nodes.GEO_prophet1005.geometry}
          material={materials["edgeBlack_1002.001"]}
          material-color={
            materialType["Deck Strip"] === "carbonFiber"
              ? "white"
              : colors["Deck Strip"]
          }
          material-map={
            materialType["Deck Strip"] === "carbonFiber"
              ? carbonFiberTexture
              : materialType["Deck Strip"] === "metallic"
              ? metallicTexture
              : undefined
          }
        />
        <mesh
          geometry={nodes.GEO_prophet1006.geometry}
          material={materials.white_1002}
          material-color={colors["Top Deck"]}
          material-map={
            materialType["Top Deck"] === "metallic"
              ? metallicTexture
              : undefined
          }
        />
        <mesh
          geometry={nodes.GEO_prophet1007.geometry}
          material={materials.white_1003}
          material-color={colors["Top Deck"]}
          material-map={
            materialType["Top Deck"] === "metallic"
              ? metallicTexture
              : undefined
          }
        />
        <mesh
          geometry={nodes.polySurface1615001.geometry}
          material={materials["inerParts_1001.001"]}
        />
        <mesh
          geometry={nodes.logo002.geometry}
          material={materials["Logo_1001.001"]}
        />
        <mesh
          geometry={nodes.logo2001.geometry}
          material={materials["Logo_1001.001"]}
        />
        <mesh
          geometry={nodes.nurbsToPoly9695001.geometry}
          material={materials["metalBlack_1001.001"]}
        />
        <mesh
          geometry={nodes.pCylinder1001.geometry}
          material={materials["metalBlack_1001.001"]}
        />
        <mesh
          geometry={nodes.polySurface1600prophet_boat001.geometry}
          material={materials["wheel_1001.001"]}
        />
        <mesh
          geometry={nodes.polySurface1600prophet_boat002.geometry}
          material={materials["wheelMetal_1001.001"]}
        />
        <mesh
          geometry={nodes.polySurface1613001.geometry}
          material={materials["Logo_1001.001"]}
        />
        <mesh
          geometry={nodes.prophet_boatpart3001.geometry}
          material={materials["metalBlack_1001.001"]}
        />
      </group>
      <group position={[132.833, 0, 0]}>
        <mesh
          geometry={nodes.GEO_prophet1010.geometry}
          material={materials.blinn1}
          position={[-136.816, 0, 0]}
          material-color={
            materialType["Interior"] === "carbonFiber"
              ? "white"
              : colors["Interior"]
          }
          material-map={
            materialType["Interior"] === "carbonFiber"
              ? carbonFiberTexture
              : materialType["Interior"] === "metallic"
              ? metallicTexture
              : undefined
          }
        />
      </group>
      <group position={[-5.821, -0.113, 0]} scale={[1.142, 1, 1]}>
        <mesh
          geometry={nodes.nurbsToPoly9695004.geometry}
          material={materials["metalBlack_1001.003"]}
        />
        <mesh
          geometry={nodes.pCylinder1004.geometry}
          material={materials["metalBlack_1001.003"]}
        />
      </group>
      <mesh
        geometry={nodes.prophet_boatpart003.geometry}
        material={materials["metalBlack_1001.002"]}
        position={[0.833, 0, 0]}
      />
      <mesh
        geometry={nodes.prophet_boatpat1003.geometry}
        material={materials["metalBlack_1001.002"]}
        position={[-0.938, 0, 0]}
      />
      <mesh
        geometry={nodes.prophet_boatpat003.geometry}
        material={materials["metalBlack_1001.002"]}
        position={[-3.949, 0, 0]}
      />
      <mesh
        geometry={nodes.polySurface1602003.geometry}
        material={materials["plastic_1001.002"]}
        position={[-3.223, 0, 0]}
      />
      <mesh
        geometry={nodes.pCylinder1seat1prophet_boat003.geometry}
        material={materials["seat1_1001.002"]}
        position={[-3.447, 0, 0]}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        position={[-3.61, 0, 0]}
      />
      <mesh
        geometry={nodes.pCube1.geometry}
        material={materials.lambert1}
        position={[132.807, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.pCube1001.geometry}
        material={materials["blinn1.002"]}
        material-color={
          materialType["Interior"] === "carbonFiber"
            ? "white"
            : colors["Interior"]
        }
        material-map={
          materialType["Interior"] === "carbonFiber"
            ? carbonFiberTexture
            : materialType["Interior"] === "metallic"
            ? metallicTexture
            : undefined
        }
        position={[-3.192, 2.237, 18.481]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[44.513, 1.905, 1.861]}
      />
    </group>
  );
}

useGLTF.preload("/models/boat.glb");
