"use client";

import {
  useState,
  createContext,
  type ReactNode,
  useContext,
  useMemo,
} from "react";
import { RecipeModal } from "../recipe-modal";

const ModalContext = createContext({
  open: () => {},
  close: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const value = useMemo(
    () => ({
      open: () => setIsModalOpen(true),
      close: () => setIsModalOpen(false),
    }),
    [],
  );
  return (
    <ModalContext.Provider value={value}>
      {children}
      {isModalOpen && <RecipeModal onClose={() => setIsModalOpen(false)} />}
    </ModalContext.Provider>
  );
};

export function useModal() {
  return useContext(ModalContext);
}
