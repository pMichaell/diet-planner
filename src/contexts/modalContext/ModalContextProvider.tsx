import { ReactNode, useState } from "react";
import ModalContext, { ModalContextType, ModalType } from "./ModalContext";

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, modalTextSet] = useState("");
  const [modalType, modalTypeSet] = useState<ModalType>("informative");
  const [optionsText, setOptionsText] = useState<[string, string]>(["", ""]);
  const [optionsHandlers, setOptionHandlers] = useState<Array<() => void>>();

  const openModal = function openModal() {
    setModalOpen(true);
  };

  const closeModal = function closeModal() {
    setModalOpen(false);
    modalTextSet("");
    modalTypeSet("informative");
    setOptionsText(["", ""]);
    setOptionHandlers([]);
  };

  const setModalText = function setModalText(text: string) {
    modalTextSet(text);
  };

  const setupOptionsModal = function setupOptionModal(
    optionsText: [string, string],
    optionHandlers: Array<() => void>
  ) {
    modalTypeSet("optionModal");
    setOptionsText(optionsText);
    setOptionHandlers(optionHandlers);
  };

  const contextValue: ModalContextType = {
    modalOpen,
    modalText,
    modalType,
    openModal,
    closeModal,
    setModalText,
    optionsText,
    optionsHandlers,
    setupOptionsModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
