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

export const formatTimestampToDateUI = (timestamp: number) => {

  const data = new Date(timestamp);


  const day = data.getDate().toString().padStart(2, '0');
  const month = (data.getMonth() + 1).toString().padStart(2, '0'); 
  const year = data.getFullYear();


  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;

  };