import { ReactNode, useCallback, useState } from "react";
import ModalContext, { ModalSize } from "./ModalContext";

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, modalOpenSet] = useState(false);
  const [modalSize, modalSizeSet] = useState<ModalSize>("regular");
  const [modalChildren, modalChildrenSet] = useState<ReactNode | null>(null);

  const setModalOpen = useCallback(() => modalOpenSet(true), []);
  const setModalClosed = useCallback(() => {
    modalOpenSet(false);
    modalSizeSet("regular");
  }, []);
  const setModalChildren = useCallback(
    (children: ReactNode) => modalChildrenSet(children),
    []
  );
  const setModalSize = useCallback((size: ModalSize) => modalSizeSet(size), []);

  return (
    <ModalContext.Provider
      value={{
        modalOpen,
        modalSize,
        modalChildren,
        openModal: setModalOpen,
        closeModal: setModalClosed,
        setModalChildren,
        setModalSize,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
