export const formatPrice = (value: number): string => {
    if (isNaN(value)) {
      return String(value);
    }
  
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  export const formatPascalCase = (value: string) => {
    return value
      ?.toLowerCase()
      ?.split(' ')
      ?.map((part) => part.replace(/^\D/g, (l) => l.toUpperCase()))
      ?.join(' ');
  };