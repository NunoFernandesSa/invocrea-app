export type ErrorStoreType = {
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
};
