import { ReactNode, useState } from "react";
import ModalContext, { ModalContextType } from "./ModalContext";

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, ModaltextSet] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    ModaltextSet("");
  };

  const setModalText = (text: string) => {
    ModaltextSet(text);
  };

  const contextValue: ModalContextType = {
    modalOpen,
    openModal,
    closeModal,
    modalText,
    setModalText,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
