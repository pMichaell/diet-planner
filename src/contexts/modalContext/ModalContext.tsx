import { createContext } from "react";

export type ModalType = "informative" | "optionModal";

export type ModalContextType = {
  modalOpen: boolean;
  modalText?: string;
  modalType?: ModalType;
  openModal?: () => void;
  closeModal?: () => void;
  setModalText?: (text: string) => void;
  optionsText?: [string, string];
  optionsHandlers?: Array<() => void>;
  setupOptionsModal?: (
    optionsText: [string, string],
    optionHandlers: Array<() => void>
  ) => void;
};

const defaultValue: ModalContextType = {
  modalOpen: false,
};

const context = createContext(defaultValue);

export default context;
