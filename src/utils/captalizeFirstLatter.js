/*
Transform first latter in uppercase latter
example -> Example
 */

const captalizeFirstLatter = (string) => (
  string[0].toUpperCase() + string.slice(1)
);

export default captalizeFirstLatter;
