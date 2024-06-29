export const formatPrice = (value: number): string => {
    if (isNaN(value)) {
      return String(value);
    }
  
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };