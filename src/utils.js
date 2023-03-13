export function formatData(sqft, bedrooms, bathrooms, brick, neighborhood) {
  const _data = {
    sqft: sqft,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    brick: brick,
    neighborhood: neighborhood,
  };
  return _data;
}

export function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

export function formatCurrency(num) {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
