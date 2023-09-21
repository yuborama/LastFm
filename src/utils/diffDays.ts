const diffDays = (fecha: string) => {
  const date1 = new Date(fecha);
  const date2 = new Date();
  const diffMs = Math.abs(date1.getTime() - date2.getTime());
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return diffDays;
};

export default diffDays;
