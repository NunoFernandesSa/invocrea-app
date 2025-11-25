import { create } from "zustand";
import { ErrorStoreType } from "../types/error-types";

export const useErrorStore = create<ErrorStoreType>((set) => ({
  error: null,

  setError: (error: string | null) => set({ error }),

  clearError: () => set({ error: null }),
}));
