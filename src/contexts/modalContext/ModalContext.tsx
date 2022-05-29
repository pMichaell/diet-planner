import { createContext, ReactNode } from "react";

export type ModalType = "informative" | "optionModal";

export type ModalContextType = {
  modalOpen: boolean;
  modalChildren: ReactNode | null;
  openModal?: () => void;
  closeModal?: () => void;
  setModalChildren?: (children: ReactNode) => void;
};

const defaultValue: ModalContextType = {
  modalOpen: false,
  modalChildren: null,
};

const context = createContext(defaultValue);

export default context;
