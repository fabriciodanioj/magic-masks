const rg = (value: string | number): string => {
  const string = value.toString();

  const formattedString = string
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{1})\d+?$/, '$1'); // Prevent the user typing any more

  return formattedString;
};

export default rg;
