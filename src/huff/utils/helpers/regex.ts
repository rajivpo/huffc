/**
 * Combine an array of regex strings into one, seperated by "\\s*\\n*"
 */
export const combineRegexElements = (regexElements: string[]): RegExp => {
  return new RegExp(regexElements.join("\\s*\\n*"));
};
