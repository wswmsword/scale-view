/** 取小数后一位的四舍五入 */
export function round(number, precision = 3) {
  return Math.round(+number + 'e' + precision) / Math.pow(10, precision);
};