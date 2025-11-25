/**
 * ErrorStoreType
 * @property {string | null} error - The error message.
 * @property {function} setError - A function to set the error message.
 * @property {function} clearError - A function to clear the error message.
 */
export type ErrorStoreType = {
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
};
