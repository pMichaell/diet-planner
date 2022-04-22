import classes from "./ModalContext.module.css";
import { createContext, useContext } from "react";

export type ModalContextType = {
  modalOpen: boolean;
  openModal?: () => void;
  closeModal?: () => void;
  modalText?: string;
  setModalText?: (text: string) => void;
};

const defaultValue: ModalContextType = {
  modalOpen: false,
};

const context = createContext(defaultValue);

export default context;
