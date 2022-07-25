import { useRecoilState } from "recoil";

export const generateModalHook = (reacoilState) => {
  return () => {
    const [isOpen, setIsOpen] = useRecoilState(reacoilState);
    const openModal = () => {
      setIsOpen(true);
    };
    const closeModal = () => {
      setIsOpen(false);
    };
    return { isOpen, openModal, closeModal };
  };
};
