import { create } from "zustand";

const useMenuStore = create((set) => ({
  selectionModel: "Please Select Model First and Its All Feild",
  totalPrice: 0,
  selectedOptions: {
    "Select your Hull (single select)": null,
    "Engine options (single select)": null,
    "Trim options (multi-select)": [],
    "Grab bar options (multi-select)": [],
    "Poling platform options (multi-select)": [],
    "Accessories (multi-select)": [],
    "Steering kits (multi-select)": [],
    "Additional options (multi-select)": [],
    "Trailer options (single select)": null,
  },
  updateTotalPrice: (price) => set((state) => ({ totalPrice: price })),
  updateSelection: (selectedOptions) =>
    set((state) => ({
      selectedOptions: selectedOptions,
    })),
  updateSelectionModel: (model) => set(() => ({ selectionModel: model })),
}));

export default useMenuStore;
