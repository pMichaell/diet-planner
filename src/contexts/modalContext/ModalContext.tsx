import { createContext, ReactNode } from "react";

export type ModalSize = "regular" | "big";

export type ModalContextType = {
  modalOpen: boolean;
  modalSize: ModalSize;
  modalChildren: ReactNode | null;
  openModal?: () => void;
  closeModal?: () => void;
  setModalSize?: (size: ModalSize) => void;
  setModalChildren?: (children: ReactNode) => void;
};

const defaultValue: ModalContextType = {
  modalOpen: false,
  modalChildren: null,
  modalSize: "regular",
};

const context = createContext(defaultValue);

export default context;
