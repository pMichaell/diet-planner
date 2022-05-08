import { ReactNode, useCallback, useState } from "react";
import ModalContext, { ModalContextType, ModalType } from "./ModalContext";

const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, modalTextSet] = useState("");
  const [modalType, modalTypeSet] = useState<ModalType>("informative");
  const [optionsText, setOptionsText] = useState<[string, string]>(["", ""]);
  const [optionsHandlers, setOptionHandlers] = useState<Array<() => void>>();

  const openModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    modalTextSet("");
    modalTypeSet("informative");
    setOptionsText(["", ""]);
    setOptionHandlers([]);
  }, []);

  const setModalText = useCallback((text: string) => {
    modalTextSet(text);
  }, []);

  const setupOptionsModal = useCallback(
    (optionsText: [string, string], optionHandlers: Array<() => void>) => {
      modalTypeSet("optionModal");
      setOptionsText(optionsText);
      setOptionHandlers(optionHandlers);
    },
    []
  );

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
