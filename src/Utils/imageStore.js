// imageStore.js
import { create } from "zustand";

const useImageStore = create((set) => ({
  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }),
  getSelectedImage: () => set((state) => state.selectedImage),
  consoleLog: () => set((state) => console.log(state.selectedImage)),
}));

export default useImageStore;
