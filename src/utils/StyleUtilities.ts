// https://gist.github.com/youssman/745578062609e8acac9f
export const camelCaseToDashed = (string: string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const convertStyleObjectToCSS = (styleObject: object) => {
  return Object.entries(styleObject).map(
    ([styleKey, styleValue]) =>
      `${camelCaseToDashed(styleKey)}: ${
        isNaN(styleValue) ? styleValue : `${styleValue}rem`
      };`
  );
};
