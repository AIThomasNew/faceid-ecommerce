import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSeeMode = create(
  persist(
    (set, get) => ({
      turn: false,
      font: "",
      size: "",
      style: "",
      color: "",
      // off or on see mode : completed
      clear: () => {
        set((state) => ({
          font: "",
          size: "",
          style: "",
          color: "",
        }));
      },
      setTurn: () => {
        set((state) => ({
          turn: !state.turn,
        }));
      },
      // color : completed
      setColor: (val) => {
        set((state) => ({
          color: val,
        }));
      },
      // font : completed
      setFont: (val) => {
        set((state) => ({
          font: val,
        }));
      },
      // size : completed
      setSize: (val) => {
        set((state) => ({
          size: val,
        }));
      },
      // font-style : completed
      setStyle: (val) => {
        function setValue(value) {
          set((state) => ({
            style: value,
          }));
        }
        if (val === "bold") {
          if (get().style === "bold") setValue("");
          else setValue("bold");
        } else if (val === "underline") {
          if (get().style === "underline") setValue("");
          else setValue("underline");
        } else if (val === "italic") {
          if (get().style === "italic") setValue("");
          else setValue("italic");
        }
      },
    }),
    {
      name: "see-mode-storage",
      getStorage: () => sessionStorage,
    }
  )
);
