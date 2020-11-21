const phone = (value: string | number): string => {
  const string = value.toString();

  const formattedString = string
    .replace(/\D/g, '')
    .replace(/^(\d{3})(\d)/g, '$1 $2')
    .replace(/^(\d{2})(\d)/g, '($1) $2')
    .replace(/(\d{4})(\d{4})$/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');

  return formattedString;
};

export default phone;
