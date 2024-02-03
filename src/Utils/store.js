import { create } from "zustand";

const useColorStore = create((set) => ({
  colors: {
    "Sea Cat Hull": "",
    "Power Poles": "",
    "Poling Platform": "",
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
  setActiveState: (activeState) =>
    set((state) => ({
      activeState: activeState,
    })),
}));

export default useColorStore;
