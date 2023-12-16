import { round } from "./utils.js";

let idealWidth = 750;
let maxWidth = 600;
let radio = maxWidth / idealWidth;

/**
 * 初始化
 * @param {number | null} width 理想宽度，视图将基于该宽度伸缩
 * @param {number | null} maxW 实际的最大宽度
 */
function init(width = idealWidth, maxW = maxWidth) {
  idealWidth = width;
  maxWidth = maxW;
  radio = maxWidth / idealWidth;
}

/**
 * 百分比和 vw 转换，常用于 fixed 定位的且包含块为浏览器窗口的元素
 * @param {number} n 
 * @param {string | null} unit "vw" or "%"
 */
function percentage(n, unit) {
  if (unit != null && !(["vw", "%"].includes(unit))) return `${n}${unit}`;
  if (n === 0) return n;
  const maxN = round(maxWidth * n / 100);
  const pctUnit = unit || '%';
  const cssF = n > 0 ? "min" : "max";
  return `${cssF}(${n}${pctUnit}, ${maxN}px)`;
}

/**
 * vw 转换
 * @param {number} n 
 * @param {"px" | null} unit 单位
 */
function vw(n, unit) {
  if (unit != null && unit !== "px") return `${n}${unit}`;
  if (n === 0) return n;
  const vwN = round(n * 100 / idealWidth);
  return `${vwN}vw`;
}

/**
 * 限制大小的 vw 转换
 * @param {number} n 
 * @param {"px" | null} unit 单位
 */
function clampVw(n, unit) {
  if (unit != null && unit !== "px") return `${n}${unit}`;
  if (n === 0) return 0;
  const vwN = round(n * 100 / idealWidth);
  const maxN = round(n * maxWidth / idealWidth);
  const cssF = n > 0 ? "min" : "max";
  return `${cssF}(${vwN}vw, ${maxN}px)`;
}

/**
 * 居中转换，用于 left 和 right 属性，且属性所在元素的包含块是浏览器窗口
 * @param {number} n 
 * @param {"vw" | "%" | "px" | null} unit 单位
 */
function centre(n, unit) {
  if (unit == null) return n;
  if (!(["vw", "%", "px"].includes(unit))) return `${n}${unit}`;

  if (unit === "px") {
    const calc = 50 - round(n * 100 / idealWidth);
    const calc2 = round(maxWidth / 2 - n * radio);
    const cssF = n > maxWidth / 2 ? "max" : "min";
    return `calc(50% - ${cssF}(${calc2}px, ${calc}%))`;
  }

  // vw or %
  const calc = round(maxWidth * (50 - n) / 100);
  const calc2 = 50 - n;
  const cssF = n < 50 ? "min" : "max";
  return `calc(50vw - ${cssF}(${calc2}${unit}, ${calc}px))`;
}

export { init, percentage, vw, clampVw, centre };