import { ReactNode, useCallback, useState } from "react";
import ModalContext, { ModalContextType, ModalType } from "./ModalContext";

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, modalOpenSet] = useState(false);
  const [modalChildren, modalChildrenSet] = useState<ReactNode | null>(null);

  const setModalOpen = () => modalOpenSet(true);
  const setModalClosed = () => modalOpenSet(false);
  const setModalChildren = (children: ReactNode) => modalChildrenSet(children);

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        modalChildren,
        openModal: setModalOpen,
        closeModal: setModalClosed,
        setModalChildren,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
