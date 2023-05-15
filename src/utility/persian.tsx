const persian = (number: number) => {
  const persianFormat = new Intl.NumberFormat("fa");
  return persianFormat.format(number);
};

export default persian;
