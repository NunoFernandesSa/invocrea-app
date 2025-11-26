export const getStatusLabel = (status: string) => {
  const statusLabels: Record<string, string> = {
    "1": "Brouillon",
    "2": "Envoyée",
    "3": "Validée",
    "4": "En attente",
    "5": "Payée",
    "6": "Annulée",
    "7": "Impayée",
  };
  return statusLabels[status] || status;
};
