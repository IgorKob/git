export const required = value => {
  if (value) return undefined;
  return 'Field is required';
}
export const maxLengthCreater = (maxLength) => (value) => {
  debugger
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
}