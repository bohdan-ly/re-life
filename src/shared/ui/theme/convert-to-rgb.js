export const convertToRGB = (hex) => {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }

  if (!hex || hex.length !== 6) {
    throw `${color} Only six-digit hex colors are allowed.`;
  }

  const aRgbHex = hex.match(/.{1,2}/g);
  const aRgb = [parseInt(aRgbHex[0], 16), parseInt(aRgbHex[1], 16), parseInt(aRgbHex[2], 16)];
  return aRgb;
};
