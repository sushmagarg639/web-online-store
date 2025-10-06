export const required = (label: string) => (val: string) => {
  return !val.trim() ? `${label} field is required` : null;
};

export const validateWithRegex = (regex: RegExp, message: string) => (val: string) =>
  !regex.test(val) ? message : null;
