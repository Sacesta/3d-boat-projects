import { create } from "zustand";

const useColorStore = create((set) => ({
  texture: {
    Interior: "/textures/carbon-fiber/1.png",
    "Deck Strip": "/textures/carbon-fiber/1.png",
  },
  materialType: {
    Interior: "normal",
    "Deck Strip": "normal",
    "Top Deck": 'normal'
  },
  selectedTypes: [],
  colors: {
    "Base Body": "#EE91C4",
    "Deck Strip": "#000000",
    Interior: "#d1d1d1",
    "Top Deck": "#E3E6D5",
  },
  activeState: 0,
  setInitialColors: (colors) =>
    set((state) => ({
      colors: colors,
    })),
  setColors: (color) =>
    set((state) => ({
      colors: {
        ...state.colors,
        [color.part]: color.hex,
      },
    })),
  setCarbonTexture: (texture) =>
    set((state) => ({
      texture: {
        ...state.texture,
        [texture.name]: texture.material,
      },
    })),
  setMaterialType: (materialType) =>
    set((state) => ({
      materialType: {
        ...state.materialType,
        [materialType.name]: materialType.type,
      },
    })),
    setSelectedtypes: (index, type) => 
    set((state) => {
      let newSelectedTypes = [...state.selectedTypes];
      newSelectedTypes[index] = type;
      return { selectedTypes: newSelectedTypes };
    }),
  setActiveState: (activeState) =>
    set((state) => ({
      activeState: activeState,
    })),
}));

export default useColorStore;
