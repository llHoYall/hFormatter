const fgBlack = str => {
  return `\x1b[30m${str}\x1b[0m`;
};

const fgBrBlack = str => {
  return `\x1b[01;30m${str}\x1b[0m`;
};

const fgRed = str => {
  return `\x1b[31m${str}\x1b[0m`;
};

const fgBrRed = str => {
  return `\x1b[01;31m${str}\x1b[0m`;
};

const fgGreen = str => {
  return `\x1b[32m${str}\x1b[0m`;
};

const fgYellow = str => {
  return `\x1b[33m${str}\x1b[0m`;
};

const fgBlue = str => {
  return `\x1b[34m${str}\x1b[0m`;
};

const fgMagenta = str => {
  return `\x1b[35m${str}\x1b[0m`;
};

const fgCyan = str => {
  return `\x1b[36m${str}\x1b[0m`;
};

const fgWhite = str => {
  return `\x1b[37m${str}\x1b[0m`;
};

const fgBrWhite = str => {
  return `\x1b[01;37m${str}\x1b[0m`;
};

const bgBlack = str => {
  return `\x1b[40m${str}\x1b[0m`;
};

const bgRed = str => {
  return `\x1b[41m${str}\x1b[0m`;
};

const bgGreen = str => {
  return `\x1b[42m${str}\x1b[0m`;
};

const bgYellow = str => {
  return `\x1b[43m${str}\x1b[0m`;
};

const bgBlue = str => {
  return `\x1b[44m${str}\x1b[0m`;
};

const bgMagenta = str => {
  return `\x1b[45m${str}\x1b[0m`;
};

const bgCyan = str => {
  return `\x1b[46m${str}\x1b[0m`;
};

const bgWhite = str => {
  return `\x1b[47m${str}\x1b[0m`;
};

module.exports = {
  fgBlack,
  fgBrBlack,
  fgRed,
  fgBrRed,
  fgGreen,
  fgYellow,
  fgBlue,
  fgMagenta,
  fgCyan,
  fgWhite,
  fgBrWhite,
  bgBlack,
  bgRed,
  bgGreen,
  bgYellow,
  bgBlue,
  bgMagenta,
  bgCyan,
  bgWhite
};
